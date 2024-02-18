import React from "react";
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import SignMeal from "./assets/signUpMeal.png";

function SignIn() {
  return (
    <>
      {" "}
      <div className="signUp">
        <div className="signUpLeft">
          <div className="signUpThe">
            <img src={Logo} alt="" />
            <h1 className="signUpMain">Sign In To eatly</h1>
            <form action="" className="signUpForm">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="signUpName"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="signUpEmail"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="signUpPassword"
                />
              </div>
              <div className="sus">
                <Link to="/" className="signUpSubmit">
                  Sign In
                </Link>
              </div>
            </form>
            <p className="signUpHave">
              Create A New Account ? <Link to="/">Sign Up</Link>
            </p>
          </div>
        </div>
        <div className="signUpRight">
          <img src={SignMeal} alt="" />
          <h1 className="signUpText">Find Foods With Love</h1>
          <p className="signUpDesc">
            Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
            Including Asian, Chinese, Italians And Many More. Our Dashboard
            Helps You To Manage Orders And Money.
          </p>
        </div>
      </div>
    </>
  );
}

export default SignIn;
