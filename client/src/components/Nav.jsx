import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import logo from "../assets/images/wallet-watch.png";

import "./nav.css";

// navbar component loads on every page
function Nav() {
  const styles = {
    navbar: {
      background: "black",
      color: "green",
    },
    text: {
      paddingLeft: '30px',
      paddingRight: '30px',
    },
  };

  function showNavigation() {
    // if user is logged in, return MyProfile, Home, and Logout
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
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
            <Link to="/">Home</Link>
          </li>
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Link to="/login">Login</Link>
            </a>
          </li>
        </ul>

      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h2><img src={logo} alt="logo" /> Wallet Watch</h2>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
