import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";

// import logo from "./assets/foodoraLogo.png";

const resImg =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
/**
 ------------Food Delivery App Structure------------
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Bar
 *  - RestaurantContainer
 *  - RestaurantCard
 *    -Img
 *    - Name & star-rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 * 
 * => Config Driven Ui
 */

// Restaurant Card

const Footer = () => {};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
