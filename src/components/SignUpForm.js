import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../config/routes";
import { createNewUser } from "../http/auth";

function SignUpForm() {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleInput(e) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createNewUser(user);
      navigate(`/${ROUTES.SIGN_IN}`, { state: { success: true } });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="signup">
      <form className="form" style={{ marginTop: "2.5rem" }}>
        <label htmlFor="username">
          <input
            placeholder="enter your surname"
            name="username"
            id="username"
            value={user.username}
            onChange={handleInput}
          />
        </label>
        <br />
        <label htmlFor="firstName">
          <input
            placeholder="enter your first name"
            name="firstName"
            id="firstName"
            value={user.firstName}
            onChange={handleInput}
          />
        </label>
        <br />
        <label htmlFor="lastName">
          <input
            placeholder="enter your last name"
            name="lastName"
            id="lastName"
            value={user.lastName}
            onChange={handleInput}
          />
        </label>
        <br />
        <label htmlFor="email">
          <input
            placeholder="enter your email"
            name="email"
            id="email"
            type="email"
            value={user.email}
            onChange={handleInput}
          />
        </label>
        <br />
        <label htmlFor="birthDate">
          <input
            name="birthDate"
            id="birthDate"
            type="date"
            value={user.birthDate}
            onChange={handleInput}
          />
        </label>
        <br />
        <label htmlFor="password">
          <input
            placeholder="enter your password"
            name="password"
            id="password"
            type="password"
            value={user.password}
            onChange={handleInput}
          />
        </label>
        <br />
        <button className="button" onClick={handleSubmit}>
          Sign Up
        </button>
        <button
          className="button"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Back To Sign In
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
