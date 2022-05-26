import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="signin">
      <form className="form">
        <label htmlFor="username">
          <input
            id="username"
            name="username"
            value={username}
            placeholder="enter your username here"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          <input
            placeholder="enter your password here"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="button" onClick={handleSubmit}>
          Sign In
        </button>
        <button
          className="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Need an Account ?
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
