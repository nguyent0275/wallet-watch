//React Imports
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";

//CSS Imports
import "./Login.css"

//Login Function
function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  // submite function that takes user input
  // needs event.preventDefault()
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  // tracks the state of the login inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login">
      <div id="link">
        <Link to="/signup">← Go to Signup</Link>
      </div>

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="column">
            <label className="label" htmlFor="email">
              Email Address:
            </label>
            <input
              placeholder="example@domain.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label className="label" htmlFor="pwd">
              Password:
            </label>
            <input
              placeholder="*********"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
        </div>

        {error ? (
          <div className="row" id="error">
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}

        <div className="row" id="submit">
          <button id="submit-button" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
