import {createContext, useEffect, useMemo, useState, type ReactNode} from "react";
import { useTeam } from "../components/hooks/useTeam";
import type { NewTeamMember, TeamMember } from "../types";


interface TeamContextValue{
    team: TeamMember[];
    isLoadingTeam: boolean;
    teamError: string | null;
    add: (user_id: number, member: NewTeamMember) => Promise<TeamMember>;
    remove: (user_id: number, id: number) => Promise<void>;
    refetchTeam: () => void;
    teamMembers: number;
}

export const TeamContext = createContext<TeamContextValue | undefined>(undefined);

export function TeamProvider({children} : {children: ReactNode}){
    const [teamMemberCount, setTeamMemberCount] = useState(0);
    const teamList = useTeam();
    useEffect(()=>{setTeamMemberCount(teamList.team.length)},[teamList])
    

    const value = useMemo(() => ({...teamList,
        teamMembers: teamMemberCount}),[teamList])

    return(
        <TeamContext value={value}>{children}</TeamContext>
    )

}