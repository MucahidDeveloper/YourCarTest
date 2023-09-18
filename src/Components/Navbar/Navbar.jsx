import Logo from "./Logo";
import Links from "./Links";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar container flex">
        <Logo />
        <Links />
      </nav>
    </>
  );
};

export default Navbar;
