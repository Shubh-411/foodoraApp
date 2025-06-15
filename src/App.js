import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";
// import logo from "./assets/foodoraLogo.png";

// Lazy loading
const Grocery = lazy(() => import("./components/Grocery"));

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
  const { loggedInUser } = React.useContext(UserContext);
  return (
    // If you want to change the default value of UserContext, then only use the UserContext.Provider.
    // If you want to change the value of loggedInUser, then you can use a state variable and set it using setLoggedInUser.
    // <UserContext.Provider value={{ loggedInUser: "Shubham" }}>
    <Provider store={appStore}>
      <div className="app">
        <Header />
        {/* <Body />
      <Footer /> */}
        {/* Outlet is for Children Routes */}
        <Outlet />
      </div>
    </Provider>
    // </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
