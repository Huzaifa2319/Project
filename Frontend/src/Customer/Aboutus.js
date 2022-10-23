import React from "react";
import { Link } from "react-router-dom";
import "../style/Aboutus.css";
const Aboutus = () => {
  return (
    <div className="login-box">
      <h2>Feedback</h2>
      <div className="input-box">
        <input type="text" placeholder="Email" id="em-input" />
        <textarea type="email" placeholder="Your Opinion" id="text-input" />
        <button className="butt">Submit</button>
      </div>

      {/* <Link to="a" classNameName="blink"> */}
      {/* </Link> */}
    </div>
  );
};

export default Aboutus;
