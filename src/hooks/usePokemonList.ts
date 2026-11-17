import { useEffect, useState } from "react";
import type { PokemonListItem } from "../types";
import { getPokemonList } from "../api/pokemon";

export function usePokemonList() {
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPokemon = async () => {
      setIsLoading(true);
      try {
        setFetchError(null);
        const list = await getPokemonList(controller.signal);
        setPokemonList(list);
      } catch (error) {
        if (controller.signal.aborted) return;
        setFetchError(
          error instanceof Error ? error.message : "unable to fetch Pokemon",
        );
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    fetchPokemon();
    return () => controller.abort();
  }, [counter]);

  return { pokemonList, isLoading, fetchError, refetch: setCounter };
}
