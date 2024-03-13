import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

import "./Signup.css";

function Signup() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div class="signup">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div class="row">
          <div class="column">
            <label class="label" htmlFor="firstName">
              First Name :
            </label>
            <input
              placeholder="First Name"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div class="column">
            <label class="label" htmlFor="email">
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

        <div class="row">
          <div class="column">
            <label class="label" htmlFor="lastName">
              Last Name:
            </label>
            <input
              placeholder="Last Name"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div class="column">
            <label class="label" htmlFor="pwd">
              Password:
            </label>
            <input
              placeholder="**********"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="row" id="submit">
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
