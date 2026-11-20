import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function useUser() {
  const userValue = useContext(UserContext);
  if (userValue === null) {
    throw new Error("component is not child of User Provider");
  }
  return userValue;
}
