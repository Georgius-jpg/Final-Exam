import { useLocation } from "react-router-dom";
import SignInForm from "../components/SignInForm";

function SignIn() {
  const { state } = useLocation();

  return (
    <div>
      <h1>Sign In Page</h1>
      <hr />
      {state?.success && <h5>Sign up was successful</h5>}
      <SignInForm />
    </div>
  );
}

export default SignIn;
