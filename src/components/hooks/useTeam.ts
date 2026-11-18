import { useEffect, useState } from "react";
import type { TeamMember } from "../../types";
import { addToTeam, getTeamone, removeFromTeam } from "../../api/team";




export function useTeam() {
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [isLoadingTeam, setIsLoadingTeam] = useState(true);
    const [teamError, setTeamError] = useState<string | null>(null);
    const [refetchCount, setRefetchCount] = useState(0);

    useEffect(() => {
        setTeamError(null);
        const getTeam = async () => {
            try {
                const getTeam = await getTeamone<TeamMember[]>();
                setTeam(getTeam);
            } catch (error) {
                if (error instanceof Error) {
                    setTeamError(error.message)
                }
            } finally {
                setIsLoadingTeam(false)
            }
        }
        getTeam();
    }, [refetchCount])
    const refetchTeam = () => setRefetchCount(c => c + 1);
    return { team, isLoadingTeam, teamError, add: addToTeam, remove: removeFromTeam, refetchTeam };
}