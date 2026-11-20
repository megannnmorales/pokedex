import { useUser } from "../components/hooks/userUser";
import SignUpForm from "../components/SignUpForm";
import LogInForm from "../components/LogInForm";

export function HomePage() {
  const {userState, logout} = useUser()

  if(userState.status === "loading") return null
  return (
    <>
      <p> Welcome to this pokemon app {userState.status==="success" && userState.user.email}</p>
    </>
  );
}
