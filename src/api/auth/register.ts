export const BASE_URL = "https://pokemon-team-api-xlvv.onrender.com";

export async function register(email: string, password: string) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  console.log(response.body);

  if (response.status === 409) {
    throw new Error("That email is already registered");
  }
  if (!response.ok) throw new Error("Unable to sign up, please try again");

  //   await login(email, password);
}
