import { useContext } from "react";
import {TeamContext } from "../../contexts/TeamContext"

export function useTeamContext(){
    const teamValue = useContext(TeamContext);
    if(teamValue === undefined){
        throw new Error("component is not child of Toast Provider");
    }
    return teamValue
}