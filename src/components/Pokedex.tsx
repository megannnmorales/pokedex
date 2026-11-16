import PokemonGrid from "./PokemonGrid";

const pokemonList = [
  { id: 1, name: "bulbasour" },
  { id: 4, name: "charmander" },
  { id: 7, name: "squirtle" },
];

export default function Pokedex() {
  return (
    <>
      <PokemonGrid pokemon={pokemonList} />
    </>
  );
}
