import { useUser } from "../components/hooks/userUser";
import LogInForm from "../components/LogInForm";
import {useNavigate} from "react-router"

export function LoginPage() {
    const {userState, logout} = useUser()

  function onClickHandler(){
    logout()
  }

  return (
    <>
        {userState.status=== "anonymous" && <LogInForm />}
        
        {userState.status === "success" && <button type="button" onClick={()=> onClickHandler()}>Logout</button>}
    </>
  );
}