import { NavLink } from "react-router";
import { addToTeam } from "../../api/team";
import { checkIfOnTeam } from "../../lib/checkIfOnTeam";
import { useToast } from "../hooks/useToast";

interface PokemonCardProps {
  id: number;
  name: string;
}

export default function PokemonCard({ id, name }: Readonly<PokemonCardProps>) {
  const onTeam = checkIfOnTeam(String(id));

  const { showToast } = useToast();

  const onClickHandler = () => {
    addToTeam(4, { pokemon_id: id, pokemon_name: name });
    showToast(`${name} has been added`);
  };
  return (
    <li role="listitem" aria-label="Pokemon Card">
      {onTeam && <span className="badge">On your team</span>}
      <NavLink to={`/pokedex/${id}`}>
        <h2>{name.toUpperCase()}</h2>
      </NavLink>
      <p> #0{id}</p>
      <img
        alt={`${name} image`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <button type="button" id="addToTeam" onClick={() => onClickHandler()}>
        Add to my team
      </button>
    </li>
  );
}
