import React from "react";
import CustomerPannel from "./Customer/CustomerPannel";
import Login from "./Customer/Login";
import Signup from "./Customer/Signup";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <CustomerPannel />
      {/* <h1>haaaaaaaaaaaaaaaaaaaaaa</h1> */}
      {/* <Link to="/">Login</Link>
      <Link to="/Signup">Signup</Link> */}
      {/* <Side /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
    </div>
  );
};

export default Home;
