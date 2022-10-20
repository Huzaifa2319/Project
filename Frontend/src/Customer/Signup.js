import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/login.css";
import {Link} from 'react-router-dom'
import Login from "./Login";

const Signup = () => {
  return (
    <>
    <div class="sidebar">
            <h1>Afsanay</h1>
            <p>अफ़साने अब लिखता नहीं हूँ
मैं दुनिया को दीखता नहीं हूँ
मत पूछो मैं कितना सही हूँ
क्यूँ एक जगह टिकता नहीं हूँ
बसर करते हैं तेरे दिल में
असर है तो शिकवा करे क्यूँ </p>
        </div>
        <div class="content">
  
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Signup</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-phone"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-box"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="confirm password"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    value="Signup"
                    className="btn float-right login_btn"
                  />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Already have Account?<a href="Login.js">Sign in</a>
                {/* Already have Account? */}
                {/* <Link to="Login">Sign in</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signup;
