import "./Category.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import OfferCard from "../../Components/OfferCard/OfferCard.jsx";
import Card from "../../Components/Card/Card.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../../utils/url.js";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import {
  productsFailure,
  productsStart,
  productsSuccess,
} from "../../Redux/Slices/productsSlice.jsx";

const api = axios.create({
  baseURL: url,
});

const Category = ({ offersCard }) => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.products);
  const pathName = window.location.pathname.split("/")[2];
  const [selectedCategory, setSelectedCategory] = useState(pathName);
  const categories = useSelector((state) => state?.categories?.categories);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const deals = useSelector((state) => state?.deals?.deals);

  useEffect(() => {
    setSelectedCategory(pathName);
  }, [pathName]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, allProducts]);

  useEffect(() => {
    console.log(allProducts);
  }, [allProducts]);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(productsStart());
      try {
        const res = await api.get("/products?category=" + pathName);
        console.log(res.data);
        dispatch(productsSuccess(res.data));
      } catch (error) {
        console.log(error);
        dispatch(productsFailure(error));
      }
    };

    fetchProducts();
  }, [pathName]);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container-fluid position-relative ">
        <div className="row">
          <div className="offset-xl-1 col-xl-10 col-12 deal-section indexClass">
            <div className="deal-header" data-aos="fade-right">
              <h1>
                Up to -40% <span className="icon">🎉</span> Exclusive deals
              </h1>
            </div>
            {/* <div className="categories" data-aos="fade-left">
              <a href="" className="category">
                Offers
              </a>
              <a href="" className="category">
                Midnight
              </a>
              <a href="" className="category active">
                Pizza & Fast food
              </a>
              <a href="" className="category">
                Others
              </a>
            </div> */}
          </div>
        </div>
        <div
          className="row catCardsRow align-items-center justify-content-center"
          style={{ zIndex: "1" }}
        >
          {deals?.map((item) => {
            return (
              <div
                className="offerCard "
                data-aos="fade-right"
                data-aos-duration="2000"
                style={{ zIndex: "99", position: "relative" }}
              >
                <Link to={`/deal/${item?._id}`} style={{ zIndex: "1" }}>
                  <img src={item?.img} alt="Chef Burgers London" />
                  <div className="discount">-{item?.discountPercentage}%</div>
                  <div className="info">
                    <div className="dealTitle">{item?.title}</div>
                    {/* <div className="title">{item?.description}</div> */}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Search Section */}
        <div className="offer-section container">
          <h1 className="offers-title">
            Find your favorite dishes from our menu 🍽️✨
          </h1>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search from categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-icon">
              <SearchIcon sx={{ color: "black" }} />
            </button>
          </div>
        </div>

        <br />
        <br />

        {/* Product Display Section */}
        <div className="container-fluid">
          <div className="row">
            <div className=" col-xl-3 col-12">
              <div className="ms-xl-2 menu-container">
                <div className="menu-header">
                  <img
                    src="/assets/icons/menu.png"
                    alt="Menu Icon"
                    width={35}
                    className="menu-icon"
                  />
                  <span className="menu-title">Menu</span>
                </div>
                <ul className="menu-list">
                  {categories?.map((item) => {
                    return (
                      <Link
                        to={`/category/${item.name}`}
                        key={item.name}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <li
                          key={item.name}
                          className={`menu-item ${
                            selectedCategory === item.name ? "active" : ""
                          }`}
                          onClick={() => setSelectedCategory(item.name)}
                        >
                          {item.name}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="col-xl-9 col-12 ">
              <div className="container-fluid">
                <div className="row d-flex  justify-content-center align-items-center ">
                  {filteredProducts?.map((item) => {
                    return (
                      <div
                        className="col-md-6 col-xl-4 col-12 mb-3"
                        key={item.id}
                      >
                        <Link
                          to={`/product/${item?._id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <Card item={item} />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
};

export default Category;
