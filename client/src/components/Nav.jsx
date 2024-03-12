import Auth from "../utils/auth";
import { Link } from "react-router-dom";

import "../App.css";

// navbar component loads on every page
function Nav() {
  function showNavigation() {
    // if user is logged in, return MyProfile, Home, and Logout
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/user">My Profile</a>
          </li>
        </ul>
      );
    } else {
      return (
        // if user is not logged in, return Signup, Home, and Login
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
          <li className="mx-1">
            <Link to="/">Home</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
