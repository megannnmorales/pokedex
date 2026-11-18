
import { useTeam } from "../components/hooks/useTeam";
import { idFromUrl } from "./pokemon";

export function checkIfOnTeam(id:string): boolean{
    const {team} = useTeam();

    if (team.filter((pokemon)=> id === String(pokemon.pokemon_id)).length > 0){
        return true
    }
return false    
}