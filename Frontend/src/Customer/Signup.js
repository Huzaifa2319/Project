import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Signup.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

const Signup = () => {
  return (
    <>
      <div className=" head">
        <img src={logo} alt="" />
      </div>
      {/* --------------------------------------------------- */}
      <div className="s-box">
        <h2>Signup</h2>

        <div className="sindiv">
          <h5>Full Name</h5>
          <input type="text" name="" required="" />

          <h5>Email</h5>
          <input type="text" name="" required="" />

          <h5>Phone number</h5>
          <input type="text" name="" required="" />

          <h5>Address</h5>
          <input type="text" name="" required="" />

          <h5>Password</h5>
          <input type="password" name="" required="" />

          <h5>Confirm Password</h5>
          <input type="password" name="" required="" />
        </div>

        <button className="sbutt">
          Submit
          {/* <Link to="a" classNameName="blink"> */}
          {/* </Link> */}
        </button>
        <div className="llink">
          Already have an Account?
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
