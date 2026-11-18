import PokemonGrid from "./PokemonGrid";
import { usePokemonList } from "./hooks/usePokemonList";

import TeamPanel from "./TeamPanel";
import { useTeam } from "./hooks/useTeam";

// const pokemonList = [
//   { id: 1, name: "bulbasour" },
//   { id: 4, name: "charmander" },
//   { id: 7, name: "squirtle" },
// ];

export function Pokedex() {
  const { fetchError, isLoading, pokemonList, refetch } = usePokemonList();

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
    </>
  );
}
