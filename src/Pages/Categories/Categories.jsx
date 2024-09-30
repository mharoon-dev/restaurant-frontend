import "./Categories.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import OfferCard from "../../Components/OfferCard/OfferCard.jsx";
import Card from "../../Components/Card/Card.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Categories = ({ offersCard }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categories = [
    {
      name: "RICE",
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product47.jpg?v=1658199069",
      totalProducts: 12,
    },
    {
      name: "PIZZA",
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product5.jpg?v=1658199110",
      totalProducts: 10,
    },
    {
      name: "BURGER",
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product11.jpg?v=1658199103",
      totalProducts: 5,
    },
    {
      name: "FRIES",
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product19.jpg?v=1658199090",
      totalProducts: 18,
    },
    {
      name: "SET-MEALS",
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product50.jpg?v=1658199065",
      totalProducts: 30,
    },
    {
      name: "Nuggets",
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product14.jpg?v=1658199100",
      totalProducts: 35,
    },
    {
      name: "SPAGHETTI",
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/products/product58.jpg?v=1658199057",
      totalProducts: 35,
    },
  ];
  return (
    <>
      <Navbar />
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
            <h1 className="text-center catHeading">All Categories</h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="row allCatCardsRow d-flex align-items-center justify-content-center flex-wrap">
          {categories.map((item) => {
            return (
              <>
                <Link
                  to={`/category/${item.name}`}
                  key={item.name}
                  style={{ textDecoration: "none" }}
                  className="catLink"
                >
                  <Card item={item} />
                </Link>
              </>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Categories;
