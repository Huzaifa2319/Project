import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "../style/Cust_Nav.css";
import Menu from "./Menu";
import Footer from "./Footer";
const CustomerPannel = () => {
  return (
    <>
      <Header />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Footer />
    </>
  );
};

export default CustomerPannel;
