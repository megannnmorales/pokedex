import { useEffect, useState } from "react";
import type { PokemonListItem } from "../types";
import PokemonGrid from "./PokemonGrid";

// const pokemonList = [
//   { id: 1, name: "bulbasour" },
//   { id: 4, name: "charmander" },
//   { id: 7, name: "squirtle" },
// ];

interface ListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      try{
          setFetchError(null)
          const response = await fetch(`${import.meta.env.VITE_API_URL}/pokemon?limit=20`);
          if (!response.ok) {
            throw new Error("unable to fetch Pokemon");
        }
        const data : ListResponse = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        if(error instanceof Error){
          setFetchError(error.message)
        } else{
        console.error("Error!", error)
        setFetchError("unable to fetch Pokemon")  
        }
        
      } finally{
        setIsLoading(false)
      }
      
    }
fetchPokemon()

  }, []);

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
