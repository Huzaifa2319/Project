import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import abc from "../images/background_monal.jpg";
import "../style/Card.css";
import { Link } from "react-router-dom";
import Dtems from "../Dishes";
// import "../images";

const Items = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.ipath} className="card-img-top" alt="Pic not found" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h3 className="rate">Rs {props.price}</h3>
          {/* <p className="card-text">{props.des}</p> */}
          <Link href="#" className="btn btn-primary">
            Add to cart
          </Link>
        </div>
      </div>
    </>
  );
};

export default Items;
