/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { Route, redirect } from "react-router-dom";
import { useUser } from "../store/UserContext.jsx";

const isAdmin = ({ location }) => {
  const { user } = useUser();
  return user?.role === "admin" && location.pathname === "/admin"; // Check for role and admin path
};

const AdminMiddleware = ({ component, ...rest }) => {
  console.log(component);
  if (isAdmin(rest)) {
    return component; // Render component if admin
  }

  return redirect("/"); // Redirect to home otherwise
};
export default AdminMiddleware;
