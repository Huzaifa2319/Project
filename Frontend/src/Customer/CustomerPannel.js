import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "../style/Cust_Nav.css";
import Menu from "./Menu";
import Footer from "./Footer";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";

const CustomerPannel = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="a" element={<Main />} />
        <Route path="b" element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
};

export default CustomerPannel;
