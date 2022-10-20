import React from "react";
import CustomerPannel from "./Customer/CustomerPannel";
import Login from "./Customer/Login";
import Signup from "./Customer/Signup";
import { Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <ul className="App-header">
        <li>
          <Link to="/Signup">signup</Link>
        </li>
        <li>
          <Link to="/Login">login</Link>
        </li>
        <li>
          <Link to="/cust">cust</Link>
        </li>
      </ul> */}
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/cust" element={<CustomerPannel />} />
      </Routes>
    </>
  );
};

export default Home;
