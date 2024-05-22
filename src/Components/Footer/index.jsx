import React from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="second">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-12">
              <h2>Company</h2>
              <p>About us</p>
              <p>Products</p>
              <p>Contact us</p>
            </div>
            <div className="col-xl-4 col-12">
              <h2>Contact with us</h2>
              <p>
                Feel free to send us an email for more information.
              </p>
              <input type="text" placeholder="Email" />{" "}
              <button>Send</button>
            </div>
            <div className="col-xl-4 col-12 touch">
              <h2>Get in touch</h2>
              <p>Azerbaijan/Baku, AZ 1065 Inshaatchilar 494 str</p>
              <p>(+994 12) 404-80-02</p>
              <p>support@telecominvest.az</p>
              <p>www.telecominvest.az</p>
            </div>
          </div>
        </div>
      </div>
      <div className="third">
        <p>
          Copyright ©2024 All rights reserved | Created by <a href="https://www.linkedin.com/in/fidanhuseynzada/" target="_blank" rel="noopener noreferrer" className="fb">Fidan Huseynzada</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
