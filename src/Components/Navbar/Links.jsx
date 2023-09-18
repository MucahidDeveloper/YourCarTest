import "./Navbar.css";
import Cart from "./Cart";
function navLinks() {
  return (
    <ul className="flex linksList">
      <li className="link">Home</li>
      <li className="link">About</li>
      <li className="link">Services</li>
      <li className="link">Cars</li>
      <li className="link">Contact us</li>
      <li className="link">
        <Cart />
      </li>
    </ul>
  );
}

export default navLinks;
