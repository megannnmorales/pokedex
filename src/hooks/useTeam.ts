import { useEffect, useState } from "react";
import type { TeamMember } from "../types";
import { addToTeam, getTeamone, removeFromTeam } from "../api/team";

export function useTeam() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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
          setTeamError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getTeam();
  }, []);

  return {
    team,
    isLoading,
    teamError,
    add: addToTeam,
    remove: removeFromTeam,
    refetchTeam: setRefetchCount,
  };
}
