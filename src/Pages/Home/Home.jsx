import React, { useEffect } from "react";
import Slider from "../../Components/Slider/Slider.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Card from "../../Components/Card/Card.jsx";
import "./Home.css";
import CategoryCard from "../../Components/CategoryCard/CategoryCard.jsx";
import OfferCard from "../../Components/OfferCard/OfferCard.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

// categories images
import cat1 from "../../../public/assets/categories/1.png";
import cat2 from "../../../public/assets/categories/2.png";
import cat3 from "../../../public/assets/categories/3.png";
import cat4 from "../../../public/assets/categories/4.png";
import cat5 from "../../../public/assets/categories/5.png";
import cat6 from "../../../public/assets/categories/6.png";
import cat7 from "../../../public/assets/categories/7.png";
import cat8 from "../../../public/assets/categories/8.png";
import { Link } from "react-router-dom";

const Home = ({ offersCard }) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const menuItems = [
    {
      name: "Cheesey Burger",
      price: "$20.00",
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114",
      cat: "Burger",
    },
    {
      name: "Chessey Pizza",
      price: "$15.00",
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product5.jpg?v=1658199110",
      cat: "Pizza",
    },
    {
      name: "Chessey Broast",
      price: "$20.00",
      cat: "Broast",
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product9.jpg?v=1658199106",
    },
    {
      name: "Double Classic Burger",
      price: "$50.00",
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product11.jpg?v=1658199103",
      cat: "Burger",
    },
  ];

  const categories = [
    {
      name: "RICE",
      // image: cat1,
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114",
    },
    {
      name: "PIZZA",
      // image: cat2,
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product5.jpg?v=1658199110",
    },
    {
      name: "NUGGETS",
      // image: cat3,
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product9.jpg?v=1658199106",
    },
    {
      name: "DOUBLE BURGER",
      // image: cat4,
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product11.jpg?v=1658199103",
    },
    {
      name: "FRIES",
      // image: cat5,
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product19.jpg?v=1658199090",
    },
    {
      name: "RICE",
      // image: cat6,
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product47.jpg?v=1658199069",
    },
    {
      name: "SPAGHETTI",
      // image: cat7,
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product58.jpg?v=1658199057",
    },
  ];

  return (
    <>
      <Navbar />
      <Slider />
      <br />

      <div className="container-fluid">
        <div className="row justify-content-center align-items-center d-flex">
          {offersCard.map((item) => {
            return <OfferCard item={item} />;
          })}
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center catHeading">Our Menu</h1>
          </div>
        </div>
        <div className="row catCardsRow align-items-center justify-content-center">
          {categories.map((item) => {
            return (
              <>
                <Link to="/category/1" key={item.name} className="catLink">
                  <CategoryCard item={item} />
                </Link>
              </>
            );
          })}
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <Link to="/categories">
              <button className="text-center viewAllBtn">View All</button>
            </Link>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* categories */}

      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-3 col-12">
            <aside className="menu">
              <h2>Menu</h2>
              <ul className="category-list">
                <li>
                  <button className="active">
                    <span >🍔</span> Burger
                  </button>
                </li>
                <li >
                  <button>
                    <span>🍜</span> Noodles
                  </button>
                </li>
                <li>
                  <button>
                    <span>🍕</span> Pizza
                  </button>
                </li>
                <li>
                  <button>
                    <span>🌮</span> Wrap
                  </button>
                </li>
                <li>
                  <button>
                    <span>🍟</span> Appetizers
                  </button>
                </li>
                <li>
                  <button>
                    <span>🧁</span> Dessert
                  </button>
                </li>
                <li>
                  <button>
                    <span>🍔</span> Burger
                  </button>
                </li>
                <li>
                  <button>
                    <span>🍜</span> Noodles
                  </button>
                </li>
                <li>
                  <button>
                    <span>🍕</span> Pizza
                  </button>
                </li>
                <li>
                  <button>
                    <span>🌮</span> Wrap
                  </button>
                </li>
                <li>
                  <button>
                    <span>🍟</span> Appetizers
                  </button>
                </li>
                <li>
                  <button>
                    <span>🧁</span> Dessert
                  </button>
                </li>
                <li>
                  <button>
                    <span>🍔</span> Burger
                  </button>
                </li>
                <li >
                  <button>
                    <span>🍜</span> Noodles
                  </button>
                </li>
                <li>
                  <button>
                    <span>🍕</span> Pizza
                  </button>
                </li>
                <li>
                  <button>
                    <span>🌮</span> Wrap
                  </button>
                </li>
                <li>
                  <button>
                    <span>🍟</span> Appetizers
                  </button>
                </li>
                <li>
                  <button>
                    <span>🧁</span> Dessert
                  </button>
                </li>
              </ul>
            </aside>
          </div>

          <div className="col-lg-9 col-12 catCardsDiv">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 mb-3">
                  <h2>Special Menu for you...</h2>
                </div>{" "}
                {/* cards */}
                <div className="col-12 d-flex flex-md-row justify-content-center align-items-center flex-wrap p-0 ">
                  <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <div className="card catCard2">
                      <img
                        src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                        alt="Italian Noodle Pasta"
                        className="card-img-top w-100"
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">Burger</h5>
                        <h5 className="price">$15</h5>
                        <button className="order-btn">Go somewhere</button>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <div className="card catCard2">
                      <img
                        src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                        alt="Italian Noodle Pasta"
                        className="card-img-top w-100"
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">Burger</h5>
                        <h5 className="price">$15</h5>
                        <button className="order-btn">Go somewhere</button>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <div className="card catCard2">
                      <img
                        src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                        alt="Italian Noodle Pasta"
                        className="card-img-top w-100"
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">Burger</h5>
                        <h5 className="price">$15</h5>
                        <button className="order-btn">Go somewhere</button>
                      </div>
                    </div>
                  </div>
                  {/* <div className="item">
                    <img
                      src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                      alt="Italian Noodle Pasta"
                    />
                    <h3>Italian Noodle Pasta</h3>
                    <p className="price">$223</p>
                    <button className="order-btn">Order Now</button>
                  </div>
                  <div className="item">
                    <img
                      src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                      alt="Asian Noodles"
                    />
                    <h3>Asian Noodles</h3>
                    <p className="price">$119</p>
                    <button className="order-btn">Order Now</button>
                  </div>
                  <div className="item">
                    <img
                      src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                      alt="Spaghetti"
                    />
                    <h3>Spaghetti</h3>
                    <p className="price">$23</p>
                    <button className="order-btn">Order Now</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* categories end*/}

      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center catHeading">Our Products</h1>
          </div>
        </div>
        <div className="row catCardsRow align-items-center justify-content-center">
          {menuItems.map((item) => {
            return (
              <Link to="/product/1" key={item.name} className="catLink">
                <Card item={item} />
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
