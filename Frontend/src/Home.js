import React from "react";
import CustomerPannel from "./Customer/CustomerPannel";
import Login from "./Customer/Login";
import Signup from "./Customer/Signup";
import Main from "./Customer/Main";
import Menu from "./Customer/Menu";
import { Routes, Route } from "react-router-dom";
import ViewFeedbacks from "./Admin/ViewFeedbacks";
const Home = () => {
  return (
    <>
      {/* <ViewFeedbacks /> */}

      {/* <Main /> */}
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="cust" element={<CustomerPannel />}>
          <Route path="a" element={<Main />} />
          <Route path="b" element={<Menu />} />
        </Route>
      </Routes>
    </>
  );
};

export default Home;
