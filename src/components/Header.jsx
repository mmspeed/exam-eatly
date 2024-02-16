import React from "react";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="headerLeft">
          <img src={logo} alt="" />
          <Link to="/" className="backLink">
            eatly
          </Link>
          <Link to="/" className="fSource">
            Home
          </Link>
          <Link to="/tovars" className="sSource">
            Dishes
          </Link>
        </div>
        <div className="headerRight">
          <img src={cart} alt="" />
          <Link to="/signin" className="lSource">
            Login
          </Link>
          <Link to="/signup" className="suSource">
            Sign Up
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
