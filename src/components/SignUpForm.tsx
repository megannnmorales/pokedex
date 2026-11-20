import { useState } from "react";
import { useUser } from "./hooks/userUser";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signUp } = useUser();

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      await signUp(email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setEmail("");
      setPassword("");
      setIsSubmitting(false);
    }
  }
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="email">
        Email
        <input
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label htmlFor="password">
        <input
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        password
      </label>
      <button>Submit</button>
    </form>
  );
}
