import { LOGO } from "../utils/constant";

const Header = () => {
  //   console.log("Header Rendered", logo);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO} width="200px" alt="Foodora Logo" className="logo" />
      </div>
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
