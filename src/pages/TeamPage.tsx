import TeamPanel from "../components/TeamPanel";
import { useTeamContext } from "../components/hooks/useTeamContext";

export function TeamPage() {

  const {team,refetchTeam } = useTeamContext()

  return <TeamPanel team={team} remove={refetchTeam} />;
}
