import type {  PokemonListItem } from "../types";
import PokemonCard from "./PokemonCard/PokemonCard";
import {idFromUrl} from "../lib/pokemon"

interface PokemonGridProps {
  pokemon: PokemonListItem[];
}

export default function PokemonGrid({ pokemon }: Readonly<PokemonGridProps>) {
  return (
    <ul>
      {pokemon.length > 0 ? (
        pokemon.map((pokemon) => (
          <PokemonCard key={idFromUrl(pokemon.url)} id={idFromUrl(pokemon.url)} name={pokemon.name} />
        ))
      ) : (
        <li className="empty-state">There are no pokemon to show.</li>
      )}
    </ul>
  );
}
