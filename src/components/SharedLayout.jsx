import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./SharedLayout.css"; 
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/userSlice/selector";
export function SharedLayout () {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
    
    <nav className="nav-links-container">
         {
          IsLoggedIn ? (   <><Link className="link"to="/">Personal Contacts Book </Link> <Link className="link"to="/contacts">Contacts </Link></>)  : (
            <>
              <Link className="link"to="/">Personal Contacts Book </Link>
              <Link className="link"to="register">Register </Link>
              <Link className="link" to="login">Log In</Link>
            </>
          )
        } 
          
      </nav>
      <Outlet />
      
      </div>
  );
};