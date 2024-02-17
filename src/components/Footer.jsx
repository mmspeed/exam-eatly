import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="footerLeft">
          <div className="footerLogo">
            <img src={logo} alt="" />
            <Link to="/" className="backLink">
              eatly
            </Link>
          </div>
          <hr />
          <p className="footerLicense">© 2023 EATLY All Rights Reserved.</p>
        </div>
        <div className="footerRight">
          <img src={Instagram} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
