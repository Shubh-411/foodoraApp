import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
jest.mock("../../utils/constant", () => ({
  LOGO: "mock-logo-url",
}));

// it("Should load the Header component with Login button", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const loginButton = screen.getByRole("button", { name: "Login" });

//   // Assertion
//   expect(loginButton).toBeInTheDocument();
// });

// it("Should load the Header component with Cart Items 0", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const cartItem = screen
//     .getByText("🛒 - (0 items)")
//     // Assertion
//     .expect(cartItem)
//     .toBeInTheDocument();
// });

// it("Should load the Header component with Cart Item", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const cartItem = screen
//     .getByText(/🛒/)
//     // Assertion
//     .expect(cartItem)
//     .toBeInTheDocument();
// });

// it("Should change Login button to Logout on click", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const loginButton = screen.getByRole("button", { name: "Login" });
//   fireEvent.click(loginButton); // Simulate a click on the login button
//   // After clicking, the button should change to "Logout"
//   const logoutButton = screen.getByRole("button", { name: "Logout" });

//   // Assertion
//   //   expect(loginButton).toBeInTheDocument();
//   expect(logoutButton).toBeInTheDocument();
// });
