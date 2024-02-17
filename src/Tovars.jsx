import React from "react";
import Dish from "./assets/dishesImg.png";
import Plus from "./assets/plus.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Tovars() {
  return (
    <>
      <Header />
      <div className="container">
        <section className="topDish">
          <div className="dishesCards">
            <div className="dishesCard">
              <img src={Dish} alt="" />
              <h2 className="dishesName">Chicken Hell</h2>
              <p className="dishesTime">24 min - 4.8 stars</p>
              <div className="dishesPayment">
                <p className="dishesPrice">$12.99</p>
                <button className="dishesAdd">+</button>
              </div>
            </div>
            <div className="dishesCard">
              <img src={Dish} alt="" />
              <h2 className="dishesName">Chicken Hell</h2>
              <p className="dishesTime">24 min - 4.8 stars</p>
              <div className="dishesPayment">
                <p className="dishesPrice">$12.99</p>
                <button className="dishesAdd">+</button>
              </div>
            </div>
            <div className="dishesCard">
              <img src={Dish} alt="" />
              <h2 className="dishesName">Chicken Hell</h2>
              <p className="dishesTime">24 min - 4.8 stars</p>
              <div className="dishesPayment">
                <p className="dishesPrice">$12.99</p>
                <button className="dishesAdd">+</button>
              </div>
            </div>
            <div className="dishesCard">
              <img src={Dish} alt="" />
              <h2 className="dishesName">Chicken Hell</h2>
              <p className="dishesTime">24 min - 4.8 stars</p>
              <div className="dishesPayment">
                <p className="dishesPrice">$12.99</p>
                <button className="dishesAdd">+</button>
              </div>
            </div>
            <div className="dishesCard">
              <img src={Dish} alt="" />
              <h2 className="dishesName">Chicken Hell</h2>
              <p className="dishesTime">24 min - 4.8 stars</p>
              <div className="dishesPayment">
                <p className="dishesPrice">$12.99</p>
                <button className="dishesAdd">+</button>
              </div>
            </div>
          </div>
          <div className="dishesCards">
            <div className="dishesCard">
              <img src={Dish} alt="" />
              <h2 className="dishesName">Chicken Hell</h2>
              <p className="dishesTime">24 min - 4.8 stars</p>
              <div className="dishesPayment">
                <p className="dishesPrice">$12.99</p>
                <button className="dishesAdd">+</button>
              </div>
            </div>
            <div className="dishesCard">
              <img src={Dish} alt="" />
              <h2 className="dishesName">Chicken Hell</h2>
              <p className="dishesTime">24 min - 4.8 stars</p>
              <div className="dishesPayment">
                <p className="dishesPrice">$12.99</p>
                <button className="dishesAdd">+</button>
              </div>
            </div>
            <div className="dishesCard">
              <img src={Dish} alt="" />
              <h2 className="dishesName">Chicken Hell</h2>
              <p className="dishesTime">24 min - 4.8 stars</p>
              <div className="dishesPayment">
                <p className="dishesPrice">$12.99</p>
                <button className="dishesAdd">+</button>
              </div>
            </div>
            <div className="dishesCard">
              <img src={Dish} alt="" />
              <h2 className="dishesName">Chicken Hell</h2>
              <p className="dishesTime">24 min - 4.8 stars</p>
              <div className="dishesPayment">
                <p className="dishesPrice">$12.99</p>
                <button className="dishesAdd">+</button>
              </div>
            </div>
            <div className="dishesCard">
              <img src={Dish} alt="" />
              <h2 className="dishesName">Chicken Hell</h2>
              <p className="dishesTime">24 min - 4.8 stars</p>
              <div className="dishesPayment">
                <p className="dishesPrice">$12.99</p>
                <button className="dishesAdd">+</button>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="questions">
          <h1 className="questionsMain">Frequently Asked Questions</h1>
          <div className="question">
            <h1 className="questionZag">How long does delivery take ?</h1>
            <img src={Plus} alt="" />
          </div>
          <hr />
          <div className="question">
            <h1 className="questionZag">How Does It Work ?</h1>
            <img src={Plus} alt="" />
          </div>
          <hr />
          <div className="question">
            <h1 className="questionZag">
              How does your food delivery service work ?
            </h1>
            <img src={Plus} alt="" />
          </div>
          <hr />
          <div className="question">
            <h1 className="questionZag">
              What payment options do you accept ?
            </h1>
            <img src={Plus} alt="" />
          </div>
          <hr />
          <div className="question">
            <h1 className="questionZag">
              Do you offer discounts or promotions ?
            </h1>
            <img src={Plus} alt="" />
          </div>
          <hr />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Tovars;
