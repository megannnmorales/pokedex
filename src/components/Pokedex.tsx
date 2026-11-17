import { useEffect, useState } from "react";
import type { PokemonListItem } from "../types";
import PokemonGrid from "./PokemonGrid";
import { usePokemonList } from './hooks/usePokemonList'

// const pokemonList = [
//   { id: 1, name: "bulbasour" },
//   { id: 4, name: "charmander" },
//   { id: 7, name: "squirtle" },
// ];



export default function Pokedex() {

  const {fetchError, isLoading, pokemonList} = usePokemonList()

  if(isLoading){
    return <p>Loading Pokemon...</p>
  }
  if(fetchError !== null){
    return <p>Oh no! An error! : {fetchError}</p>
  }

  return (
    <>
      <PokemonGrid pokemon={pokemonList} />
    </>
  );
}
