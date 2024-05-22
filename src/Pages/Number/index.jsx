import React from "react";
import { Link } from "react-router-dom"; 
import "./index.scss";

const Number = () => {
  return (
    <div className="contact">
      <div className="gradient-bg"></div>
      <div className="textt">
        <div className="title">
          <span>TELECOM INVEST</span>
          <p>Contact Us for questions and orders.</p>
        </div>
        <div className="buttons">
          <Link to="/products">
            <button className="order">ORDER NOW</button>
          </Link>
          <Link to="/contact">
            <button className="contact">CONTACT US</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Number;
