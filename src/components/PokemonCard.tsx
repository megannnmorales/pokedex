interface PokemonCardProps {
  id: number;
  name: string;
}

export default function PokemonCard({ id, name }: Readonly<PokemonCardProps>) {
  return (
    <li>
      <p>
        {name.toUpperCase()} #0{id}
      </p>
      <img
        alt={`${name} image`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
    </li>
  );
}
