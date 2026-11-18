import { apiGet } from "./clients";
import type { Pokemon, PokemonListItem } from "../types";

export const getPokemonList = (
  signal?: AbortSignal,
): Promise<PokemonListItem[]> => {
  return apiGet<PokemonListItem[]>("/pokemon?limit=20", signal);
};

export const getPokemon = (
  nameOrId: string | number,
  signal?: AbortSignal,
): Promise<Pokemon> => {
  return apiGet<Pokemon>(`/pokemon/${nameOrId}`, signal);
};