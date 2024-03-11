import Auth from "../utils/auth";
import { Link } from "react-router-dom";

import "../../node_modules/bootstrap/scss"

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
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        //original

        // <ul className="flex-row">
        //   <li className="mx-1">
        //     <Link to="/signup">Signup</Link>
        //   </li>
        //   <li className="mx-1">
        //     <Link to="/login">Login</Link>
        //   </li>
        //   <li className="mx-1">
        //     <Link to="/">Home</Link>
        //   </li>
        // </ul>

        // regular bootstrap
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a styles={styles.logo}>Wallet Watch</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Link to="/">Home</Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Link to="/login">Login</Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Link to="/signup">Signup</Link>
            </a>
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
