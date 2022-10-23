import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../style/login.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

const Login = () => {
  return (
    <>
      <div className=" head">
        <img src={logo} alt="" />
      </div>
      {/* --------------------------------------------------- */}
      <div className="login-box">
        <h2>Login</h2>

        <div className="indiv">
          <h5>Username</h5>
          <input type="text" name="" required="" />

          <h5>Password</h5>
          <input type="password" name="" required="" />
        </div>

        <button className="butt">
          Submit
          {/* <Link to="a" classNameName="blink"> */}
          {/* </Link> */}
        </button>
        <div className="slink">
          Not Registered?
          <Link to="/Signup">Sign up</Link>
        </div>
      </div>
    </>
  );
};
export default Login;
