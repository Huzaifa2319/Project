import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/IDetails.css";
import Dtems from "../Dishes";
import { Link } from "react-router-dom";
import ItemComments from "./ItemComments";
const ItemDetails = () => {
  return (
    <>
      <div id="product">
        <div className="product_images">
          <img src={Dtems[0].ipath} alt="Img not found Error 69" />
        </div>
        <div className="product_details">
          <div className="back">
            <span className="material-symbols-outlined">chevron_left</span>
            <h6>
              Back to <Link href="">Menu</Link>
            </h6>
          </div>

          <h1>{Dtems[0].name}</h1>
          <h3>${Dtems[0].price}</h3>

          <div className="about">
            <p>
              Availability :<span>In stock</span>
            </p>
            <p>
              Product Id : <span>#4657</span>
            </p>
            <p>
              Tags : <span>Fashion, Hood, classNameic</span>
              {/* <div class="container2">
                <span id="rateMe4" class="feedback"></span>
              </div> */}
            </p>
          </div>

          <p>{Dtems[0].des}</p>
          <h4>Ingredients</h4>
          <ul>
            <li>Dark blue suit for a tone-on-tone look</li>
            <li>Regular fit</li>
            <li>100% Cotton</li>
            <li>Free shipping with 4 days delivery</li>
          </ul>

          <Link href="">Clear Selection</Link>

          <div className="cta">
            <div className="btn btn_primary">add to cart</div>
            <div className="btn btn_outline_secondary">
              <span className="material-symbols-outlined">favorite</span>add to
              wishlist
            </div>
          </div>
        </div>
      </div>
      <ItemComments />
    </>
  );
};

export default ItemDetails;
