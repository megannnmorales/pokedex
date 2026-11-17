import type { NewTeamMember, TeamMember } from "../types";
import { apiDelete, ApiError, apiPost } from "./clients";

// export class TeamError extends Error {
//   code: "full" | "duplicate" | "unreadable" | "unavailable";
//   constructor(message: string, code: TeamError["code"]) {
//     super(message);
//     this.name = "TeamError";
//     this.code = status;
//   }
// }

export const BASE_URL = "https://pokemon-team-api-xlvv.onrender.com";
// export class ApiError extends Error {
//   status: number;
//   constructor(message: string, status: number) {
//     super(message);
//     this.name = "ApiError";
//     this.status = status;
//   }
// }

export const getTeamone = async <T>(): Promise<T> => {
  const response = await fetch(`${BASE_URL}/public/users/4/team`);

  if (!response.ok) {
    throw new ApiError(
      `Request failed with status ${response.status}`,
      response.status,
    );
  }

  return (await response.json()) as T;
};
export const addToTeam = (
  user_id: number,
  member: NewTeamMember,
): Promise<TeamMember> => {
  try {
    return apiPost<TeamMember>(`/public/users/${user_id}/team`, member);
  } catch (error) {
    throw new Error();
  }
};

export const removeFromTeam = (user_id: number, id: number): Promise<void> => {
  try {
    return apiDelete(`/public/users/${user_id}/team/${id}`);
  } catch (error) {
    throw new Error();
  }
};
