import { addToTeam} from "../../api/team";

interface PokemonCardProps {
  id: number;
  name: string;
}


export default function PokemonCard({ id, name }: Readonly<PokemonCardProps>) {
  return (
    <li role="listitem" aria-label="Pokemon Card">
      <h2>{name.toUpperCase()}</h2>
      <p> #0{id}</p>
      <img
        alt={`${name} image`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <button type="button" id="addToTeam" onClick={() => addToTeam(4,{pokemon_id: id, pokemon_name:name})}>Add to my team</button>
    </li>
  );
}
