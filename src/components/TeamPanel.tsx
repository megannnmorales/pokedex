import { removeFromTeam } from "../api/team";
import type { TeamMember } from "../types";
import PokemonCard from "./PokemonCard/PokemonCard";
import PokemonGrid from "./PokemonGrid";

interface TeamPanelProps{
    team: TeamMember[];
    remove: () => void;
}


export default function TeamPanel({team, remove} : TeamPanelProps){

    async function removeHandler(teamMember: TeamMember){
        await removeFromTeam(4,teamMember.id);
        remove()
    }

    return (<>
    <section>
        <header>
            <h2>My team</h2>
        </header>
        <ul>
            {team.map((teamMember)=>{
                return (<>
                <li key={teamMember.id}>
                <PokemonCard id={teamMember.pokemon_id} name={teamMember.pokemon_name} />
                <button type="button" id="deleteFromTeam" onClick={() => removeHandler(teamMember)}>remove from my team</button>
                </li>
                </>)
            })}
        </ul>

    </section>
    </>)
}