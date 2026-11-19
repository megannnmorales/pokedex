import { useTeamContext } from "./hooks/useTeamContext";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const {teamMembers} = useTeamContext()

  return (
    <header>
      <h1 className="">My Pokedex</h1>
      <ThemeToggle />
      <p>{teamMembers}</p>
    </header>
  );
}
