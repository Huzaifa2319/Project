import React from "react";
import CustomerPannel from "./Customer/CustomerPannel";
import Main from "./Customer/Main";
import Menu from "./Customer/Menu";
import { Routes, Route } from "react-router-dom";
const Home = () => {
  return (
    <>
      {/* <Main /> */}
      <Routes>
          <Route path="a" element={<Main />} />
          <Route path="b" element={<Menu />} />
      </Routes>
    </>
  );
};

export default RiderHome;
