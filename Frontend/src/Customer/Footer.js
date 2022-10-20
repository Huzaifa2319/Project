import React from "react";
import "../style/Footer.css";
import logo from "../images/logo.jpg";
const Footer = () => {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-1">
            <img src={logo} width="200px" />
          </div>
          <div class="col-2">
            <h1>ABOUT US</h1>
            <p>
              Matbakh <br />
              is an online store where you can buy hundreds of books. Books od x
              every genre are available at low costs.
            </p>
          </div>
          <div class="col-3">
            <h1>CONTACT</h1>
            <p>
              ISLAMABAD H13-markaz near Famous Fast Food
              <h3>phone number</h3>
              <ul>
                <li>03106565378</li>
                <li>03136900427</li>
                <li>03696969696</li>
              </ul>
            </p>
          </div>
          <div class="col-4">
            <h1>Developers</h1>
            <p>
              <ul>
                <li>Huzaifa Anjum</li>
                <li>Khuzaima Haroon</li>
                <li>Hammad Aslam</li>
                <li>Fahad Bajwa</li>
                <li>Umair Farooq</li>
              </ul>
            </p>
          </div>
        </div>
        <hr />
        <p class="copyright">
          Copyright 2020 - Software Construction and Development Project
        </p>
      </div>
    </div>
  );
};

export default Footer;
