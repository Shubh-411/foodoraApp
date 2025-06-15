import { LOGO } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  // Subscribe to the store using useSelector
  const cartItems = useSelector((store) => store.cart.items);
  // const { loggedInUser } = useContext(UserContext); // This will give the default value of loggedInUser
  // console.log("Header Rendered", loggedInUser);
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
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/cart"}> 🛒 - ({cartItems.length} items) </Link>
          </li>
          {/* <li>
            <Link to={"/cart"}>{loggedInUser}</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
