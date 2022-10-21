import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Cust_Nav.css";
import logo from "../images/logo.jpg";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" id="Logo" href="#">
            <img
              src={logo}
              alt="matbakh - متبخ"
              style={{ height: "50px", width: "120px" }}
            />
          </Link>

          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div
            className="collapse navbar-collapse ddiv"
            id="navbarSupportedContent"
          >
            {/* UL */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 com">
              <li className="nav-item">
                <NavLink className="nav-link" to="./a">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="b">
                  Menu
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="lol">
                  Something
                </NavLink>
              </li>
            </ul>

            {/* Search bar */}
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success subB" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;