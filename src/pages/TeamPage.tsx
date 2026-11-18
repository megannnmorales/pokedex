import TeamPanel from "../components/TeamPanel";
import { useTeam } from "../components/hooks/useTeam";

export function TeamPage() {
  const { team, isLoadingTeam, teamError, add, remove, refetchTeam } =
    useTeam();

  return <TeamPanel team={team} remove={refetchTeam} />;
}
