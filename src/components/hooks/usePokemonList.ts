import { useEffect, useState } from "react";
import type { PokemonListItem } from "../../types";

interface ListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
    refetch: () => void;
}


export function usePokemonList() {

    const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState<string | null>(null)
    const [counter,setCounter] = useState(0);

    useEffect(() => {
        setFetchError(null)
        const fetchPokemon = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/pokemon?limit=20`);
                if (!response.ok) {
                    throw new Error("unable to fetch Pokemon");
                }
                const data: ListResponse = await response.json();
                setPokemonList(data.results);
            } catch (error) {
                if (error instanceof Error) {
                    setFetchError(error.message);
                } else {
                    console.error("Error!", error);
                    setFetchError("unable to fetch Pokemon");
                }

            } finally {
                setIsLoading(false);
            }
        }
        fetchPokemon();
        
    },[counter]);


    return {pokemonList, isLoading, fetchError,refetch: setCounter}
}