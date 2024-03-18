import logo from "../../assets/images/wallet-watch.png";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <>
      <header className="flex-row px-1">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </header>
      <nav>
        <Nav />
      </nav>
    </>
  );
}

export default Header;
