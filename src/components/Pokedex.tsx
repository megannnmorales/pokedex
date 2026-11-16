import { useEffect, useState } from "react";
import type { PokemonListItem } from "../types";
import PokemonGrid from "./PokemonGrid";

// const pokemonList = [
//   { id: 1, name: "bulbasour" },
//   { id: 4, name: "charmander" },
//   { id: 7, name: "squirtle" },
// ];

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([])
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/pokemon?limit=20`)
    .then((res) => res.json())
    .then((data) => setPokemonList(data.results));
  },[])

  return (
    <>
      <PokemonGrid pokemon={pokemonList} />
    </>
  );
}
