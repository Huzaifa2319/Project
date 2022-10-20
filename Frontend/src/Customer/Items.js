import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import abc from "../images/background_monal.jpg";
import "../style/Card.css";
import Dtems from "../Dishes";
// import "../images";

const Items = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.ipath} className="card-img-top" alt="Pic not found" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.des}</p>
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Items;
