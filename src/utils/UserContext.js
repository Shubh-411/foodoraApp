import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "defaultUser",
});
// This is a context provider for the user information.
// It is used to provide the user information to all the components in the app.

export default UserContext;
