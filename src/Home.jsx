import React from "react";
import mImg from "./assets/mImg.png";
import { Link } from "react-router-dom";
import Iphon from "./assets/iphon.png";
import King from "./assets/sellKing.png";
import Saved from "./assets/kingSaved.png";
import Dish from "./assets/dishesImg.png";
import Dishh from "./assets/dish.png";
import RangeF from "./assets/purchaseRange1.png";
import RangeS from "./assets/purchaseRange2.png";
import Customer from "./assets/customer.png";
import Discount from "./assets/discountFood.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <section className="enjoyFood">
          <div className="enjoyFoodLeft">
            <div className="overmore">
              <p className="overmoreText">OVER 1000 USERS</p>
            </div>
            <h1 className="enjoyFoodMain">Enjoy Foods All Over The World</h1>
            <p className="enjoyFoodDesc">
              EatLy help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a $20 bonus.
            </p>
            <Link to="/" className="startBtn">
              Get Started
            </Link>
          </div>
          <div className="enjoyFoodRight">
            <img src={mImg} alt="" className="mImg" />
          </div>
        </section>
        <section className="lastResult">
          <div className="lastResultCats">
            <div className="lastResultCat">
              <h1 className="catMain">10K+</h1>
              <p className="catBens">Satisfied Costumers</p>
              <p className="catBens">All Great Over The World</p>
            </div>
            <div className="lastResultCat">
              <h1 className="catMain">4M</h1>
              <p className="catBens">Healthy Dishes Sold</p>
              <p className="catBens">Including Milk Shakes Smooth</p>
            </div>
            <div className="lastResultCat">
              <h1 className="catMain">99.99% </h1>
              <p className="catBens">Reliable Customer Support</p>
              <p className="catBens">We Provide Great Experiences</p>
            </div>
          </div>
        </section>
      </div>
      <div className="container2">
        <section className="goodQuality">
          <div className="goodQualityLeft">
            <img src={Iphon} alt="" />
          </div>
          <div className="goodQualityRight">
            <h1 className="qualityMain">Premium Quality For Your Health</h1>
            <ul>
              <li className="advantage">
                Premium quality food is made with ingredients that are packed
                with essential vitamins, minerals
              </li>
              <li className="advantage">
                These foods promote overall wellness by support healthy
                digestion and boosting immunity
              </li>
            </ul>
            <button className="qualityDownload">Download -></button>
          </div>
        </section>
      </div>
      <div className="container">
        <hr />
        <section className="kingOfSelling">
          <img src={King} alt="" className="theKing" />
          <div className="kingProps">
            <h1 className="kingMain">The Chicken King</h1>
            <p className="kingRank">24 min - 4.8 stars</p>
            <img src={Saved} alt="" className="kingSaved" />
          </div>
        </section>
        <section className="topDishes">
          <h1 className="topMain">Our Top Dishes</h1>
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
          <Link to="/tovars">View All -></Link>
        </section>
        <hr />
        <section className="purchases">
          <div className="purchasesLeft">
            <h1 className="purchaseMn">Control Purchases Via Dashboard</h1>
            <div className="allCr">
              <div className="cards">
                <div className="card">
                  <img src={Dishh} alt="" />
                  <h1>Chicken Hell-</h1>
                  <p>On the way</p>
                </div>
                <div className="card">
                  <img src={Dishh} alt="" />
                  <h1>Swe Dish-</h1>
                  <p>Delivered</p>
                </div>
                <div className="card">
                  <img src={Dishh} alt="" />
                  <h1>Fish Hell-</h1>
                  <p>Cancelled</p>
                </div>
              </div>
              <div className="cards cards2">
                <div className="card">
                  <img src={Dishh} alt="" />
                  <h1>Chicken Hell-</h1>
                  <p>On the way</p>
                </div>
                <div className="card">
                  <img src={Dishh} alt="" />
                  <h1>Swe Dish-</h1>
                  <p>Delivered</p>
                </div>
                <div className="card">
                  <img src={Dishh} alt="" />
                  <h1>Fish Hell-</h1>
                  <p>Cancelled</p>
                </div>
              </div>
            </div>
          </div>
          <div className="purchasesRight">
            <div className="purchasesChoose">
              <h1>Purchases</h1>
              <select name="" id="">
                <option value="default">Choose the period</option>
                <option value="">Today</option>
                <option value="">Yesterday</option>
                <option value="">Last week</option>
                <option value="">Last month</option>
                <option value="">Last year</option>
              </select>
            </div>
            <div className="purchaseBens">
              <div className="purchaseBen">
                <div className="purchaseM">
                  <div className="purchaseThe">
                    <h1 className="purchaseImg">+</h1>
                    <p className="purchaseThing">Expense</p>
                  </div>
                  <div className="purchasePrice">$400.09</div>
                </div>
                <img src={RangeF} alt="" />
              </div>
              <div className="purchaseBen">
                <div className="purchaseM">
                  <div className="purchaseThe">
                    <h1 className="purchaseImg">-</h1>
                    <p className="purchaseThing">Voucher</p>
                  </div>
                  <div className="purchasePrice">$45.78</div>
                </div>
                <img src={RangeS} alt="" />
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="customer">
          <h1 className="customerSay">Customer Say</h1>
          <div className="customerCards">
            <div className="customerCard">
              <div className="customerInfo">
                <img src={Customer} alt="" />
                <h3 className="customerName">Alexander R.</h3>
              </div>
              <p className="customerWord">
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </p>
            </div>
            <div className="customerCard">
              <div className="customerInfo">
                <img src={Customer} alt="" />
                <h3 className="customerName">Alexander R.</h3>
              </div>
              <p className="customerWord">
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </p>
            </div>
          </div>
        </section>
        <section className="discount">
          <div className="discountLeft">
            <h1>GET 50%</h1>
            <form action="">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="discountEnter"
              />
              <input type="submit" value="Subscribe" className="discountSend" />
            </form>
          </div>
          <div className="discountRight">
            <img src={Discount} alt="" className="discountImg" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
