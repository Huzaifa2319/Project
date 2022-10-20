import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "../style/Cust_Nav.css";
import Items from "./Items";
import Dtems from "../Dishes";

function show(obj) {
  console.log(obj);
  return <Items ipath={obj.ipath} des={obj.des} name={obj.name} />;
}

const CustomerPannel = () => {
  return (
    <>
      <Header />
      {/* <Items name={Dtems[0].name} ipath={Dtems[0].ipath} des={Dtems[0].des} /> */}
      {/* {console.log(Dtems)} */}
      {/* {Dtems.map((e) => {
        return <Items ipath={e.ipath} name={e.name} des={e.des} />;
      })} */}
      {Dtems.map(show)}
    </>
  );
};

export default CustomerPannel;
