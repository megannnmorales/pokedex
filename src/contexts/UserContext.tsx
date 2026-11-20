import { createContext, useState, type ReactNode } from "react";

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
  const [user, setUser] = useState<UserState>({ status: "anonymous" });

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

  return (
    <UserContext value={{ userState: user, signUp }}>{children}</UserContext>
  );
}
