import React from "react";
import { Link, Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <><nav>
          <Link to="/">Personal Contacts Book </Link>
          <Link to="register">Register </Link>
          <Link to="login">Log In</Link>
      </nav>
      <Outlet />
      
      </>
  );
};