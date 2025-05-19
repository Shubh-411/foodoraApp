import { LOGO } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  //   console.log("Header Rendered", logo);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO} width="200px" alt="Foodora Logo" className="logo" />
      </div>
      <nav className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home </Link>
          </li>
          <li>
            <Link to={"/about"}>About Us </Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
