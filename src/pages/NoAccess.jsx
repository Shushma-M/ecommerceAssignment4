import React from "react";
import { NavLink } from "react-router-dom";

function NoAccess() {
  return (
    <div>
      Please <NavLink to="/login">Login</NavLink>/{" "}
      <NavLink to="/signup">SignUp</NavLink> to access this page
    </div>
  );
}

export default NoAccess;
