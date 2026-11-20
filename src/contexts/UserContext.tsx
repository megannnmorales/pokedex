import { createContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { clearToken, readToken, writeToken } from "../lib/getLocalStorage";

export interface User {
  id: number;
  email: string;
}

export type UserState =
  | { status: "loading" }
  | { status: "anonymous" }
  | { status: "success"; user: User }
  | { status: "error"; message: string };

export interface UserContextValue {
  userState: UserState;
  login: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserState>({ status: "loading" });

  async function fetchCurrentUser(token: string) {
    const getResponse = await fetch(`${import.meta.env.VITE_AUTH_API_URL}/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + token
      },
    },)

    if (!getResponse.ok) throw new Error("something went wrong!");

    return await getResponse.json();
  }

  useEffect(() => {
    setUser({status: "loading"})
    const token = readToken();

    if (!token) return setUser({status: "anonymous"});

    async function loadUser(token: string) {

      try {
        const user = await fetchCurrentUser(token);
        setUser({ status: "success", user: user });
        console.log(user)
      } catch (error) {
        if (error instanceof Error) {
          setUser({ status: "error", message: "idk" });
        }
      }
    }
    loadUser(token)

  }, [])

  async function signUp(email: string, password: string) {
    const response = await fetch(
      `${import.meta.env.VITE_AUTH_API_URL}/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      },
    );

    if (response.status === 409) {
      throw new Error("That email is already registered");
    }
    if (!response.ok) throw new Error("Unable to sign up, please try again");

    const userBody = await response.json();

    if (userBody === null) throw new Error("Error");

    setUser({ status: "success", user: userBody });
  }

  async function login(email: string, password: string) {
    const response = await fetch(
      `${import.meta.env.VITE_AUTH_API_URL}/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      },
    );

    if (response.status === 401) {
      throw new Error("Email or password is wrong");
    }
    if (!response.ok) throw new Error("Unable to login, please try again");

    const { access_token } = await response.json();

    const currUser = await fetchCurrentUser(access_token);
    writeToken(access_token)

    setUser({ status: "success", user: currUser });

  }

  async function logout() {
    setUser({ status: "anonymous" })
    clearToken()
  }

  const value = useMemo(() => { return { userState: user, signUp, login, logout } }, [user])

  return (
    <UserContext value={value}>{children}</UserContext>
  );
}
