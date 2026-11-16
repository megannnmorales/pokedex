import type { Pokemon } from "../types";
import PokemonCard from "./PokemonCard/PokemonCard";

interface PokemonGridProps {
  pokemon: Pokemon[];
}

export default function PokemonGrid({ pokemon }: Readonly<PokemonGridProps>) {
  return (
    <ul>
      {pokemon.length > 0 ? (
        pokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} />
        ))
      ) : (
        <li className="empty-state">There are no books to show.</li>
      )}
    </ul>
  );
}
