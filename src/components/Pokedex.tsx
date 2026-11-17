import PokemonGrid from "./PokemonGrid";
import { usePokemonList } from "../hooks/usePokemonList";

import { addToTeam, getTeamone, removeFromTeam } from "../api/team";
import TeamPanel from "./TeamPanel";
import { useTeam } from "../hooks/useTeam";

export default function Pokedex() {
  const { fetchError, isLoading, pokemonList, refetch } = usePokemonList();
  const { team, isLoadingTeam, teamError, add, remove, refetchTeam } =
    useTeam();

  if (isLoading) {
    return <p>Loading Pokemon...</p>;
  }
  if (fetchError !== null) {
    return (
      <>
        <p>Oh no! An error! : {fetchError}</p>
        <button
          type="button"
          onClick={() => {
            refetch((count: number) => count + 1);
          }}
        >
          Try Again
        </button>
      </>
    );
  }
  return (
    <>
      <PokemonGrid pokemon={pokemonList} />
      <TeamPanel team={team} remove={refetchTeam} />
    </>
  );
}
