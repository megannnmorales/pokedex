export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { slot: number; type: { name: string; url: string } }[];
  sprites: { front_default: string | null };
}

export interface PokemonListItem {
  name: string;
  url: string;
}
