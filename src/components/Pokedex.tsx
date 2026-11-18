import PokemonGrid from "./PokemonGrid";
import { usePokemonList } from "./hooks/usePokemonList";

import TeamPanel from "./TeamPanel";
import { useTeam } from "./hooks/useTeam";
import { useState } from "react";
import SearchBox from "./SearchBox";
import { getPokemon } from "../api/pokemon";
import usePokemon from "./hooks/usePokemon";

// const pokemonList = [
//   { id: 1, name: "bulbasour" },
//   { id: 4, name: "charmander" },
//   { id: 7, name: "squirtle" },
// ];

export default function Pokedex() {
  const { fetchError, isLoading, pokemonList, refetch } = usePokemonList();

  const [value, setValue] = useState("");

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
      <SearchBox value={value} onChange={setValue} />
    </>
  );
}
