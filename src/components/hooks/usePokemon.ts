import { useEffect, useState } from "react"
import type { Pokemon } from "../../types";
import { getPokemon } from "../../api/pokemon";

export default function usePokemon(id: string) {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState<string | null>(null)
    const [counter, setCounter] = useState(0);


    useEffect(() => {
        const controller = new AbortController();
        setFetchError(null);
        const fetchPokemon = async () => {
            try {
                const response = await getPokemon(id, controller.signal)
                setPokemon(response);
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
        fetchPokemon()
        return () => {
    controller.abort();
  };
    }, [counter])
    const refetch = setCounter
    return { pokemon, isLoading, fetchError, refetch }
}