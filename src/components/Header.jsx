import React from "react";
import Logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import { Link } from "react-router-dom";

function Header() {
  const localSignUp = localStorage.getItem("signUp");

  const logout = () => {
    localStorage.removeItem("signUp");
    alert("Logged out successfully !");
    window.location.reload();
  };

  return (
    <>
      <div className="extra">
        <img className="lg" src={Logo} alt="" />
        <a href="/">eatly</a>
      </div>
      <div className="container">
        <div className="header">
          <div className="headerLeft">
            <img src={Logo} alt="" />
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
            <p className="finally">{localSignUp}</p>
            <button onClick={logout} className="suSource">
              Logout
            </button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Header;
