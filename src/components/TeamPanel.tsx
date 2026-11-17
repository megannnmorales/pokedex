import { removeFromTeam } from "../api/team";
import type { TeamMember } from "../types";
import PokemonCard from "./PokemonCard/PokemonCard";
import PokemonGrid from "./PokemonGrid";

interface TeamPanelProps{
    team: TeamMember[];
    remove: (number) => void;
}


export default function TeamPanel({team, remove} : TeamPanelProps){

    function removeHandler(teamMember: TeamMember){
        removeFromTeam(4,teamMember.id);
        remove((count) => count +1 )
    }

    return (<>
    <section>
        <header>
            <h2>My team</h2>
        </header>
        <ul>
            {team.map((teamMember)=>{
                return (<>
                <PokemonCard key={teamMember.id} id={teamMember.pokemon_id} name={teamMember.pokemon_name} />
                <button type="button" id="deleteFromTeam" onClick={() => removeHandler(teamMember)}>remove from my team</button>
                </>)
            })}
        </ul>

    </section>
    </>)
}