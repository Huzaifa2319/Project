import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Cust_Nav.css";
import logo from "../images/logo.jpg";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navid">
        <ul className="navitems">
          <li>
            <img id="logo" src={logo} alt="" />
          </li>
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">Menu</Link>
          </li>
          <li>
            <Link to="#">Offers</Link>
          </li>
          <li>
            <Link to="#">Feedback</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
