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
          <Link to="/home" className="backLink">
            eatly
          </Link>
          <Link to="/home" className="fSource">
            Home
          </Link>
          <Link to="/tovars" className="sSource">
            Dishes
          </Link>
        </div>
        <div className="headerRight">
          <span>
            <Link to="/cart">
              <img src={cart} alt="" />
            </Link>
          </span>
          <span className="cartQuan">1</span>
          <Link to="/signin" className="lSource">
            Login
          </Link>
          <Link to="/" className="suSource">
            Sign Up
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
