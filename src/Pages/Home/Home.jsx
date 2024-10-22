import React, { useEffect, useState } from "react";
import Slider from "../../Components/Slider/Slider.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Card from "../../Components/Card/Card.jsx";
import "./Home.css";
import CategoryCard from "../../Components/CategoryCard/CategoryCard.jsx";
import OfferCard from "../../Components/OfferCard/OfferCard.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Aos from "aos";
import "aos/dist/aos.css";

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
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { url } from "../../../utils/url.js";
import {
  getMostSellsFailure,
  getMostSellsStart,
  getMostSellsSuccess,
} from "../../Redux/Slices/mostSellsSlice.jsx";
import AboutSection from "../../Components/AboutSection/AboutSection.jsx";
import ReviewCard from "../../Components/ReviewCard/ReviewCard.jsx";

const api = axios.create({
  baseURL: url,
});

const Home = ({ offersCard }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const mostSellsProducts = useSelector(
    (state) => state.mostSelles.mostSellsProducts
  );
  const categories = useSelector((state) => state?.categories?.categories);
  const [products, setProducts] = useState([]);
  const [singleCatProducts, setSingleCatProducts] = useState([]);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("Burger");

  const reviews = [
    {
      name: "John Doe",
      img: "/assets/reviews/1.jpg",
      review:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
      city: "South London",
      date: "24th September, 2024",
    },
    {
      name: "St Glx",
      img: "/assets/reviews/2.jpg",
      review:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
      city: "Allentown",
      date: "30th July, 2024",
    },
    {
      name: "Chris Smith",
      img: "/assets/reviews/3.avif",
      review:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
      city: "Western Ontario",
      date: "18th June, 2024",
    },
  ];
  useEffect(() => {
    console.log("mostSellsProducts", mostSellsProducts);
  }, [mostSellsProducts]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(getMostSellsStart());
        const res = await api.get(
          "/products/mostsells?category=" + selectedCategory
        );
        console.log(res.data);
        console.log("signle Cat products upar hai");

        setSingleCatProducts(res.data);
        dispatch(getMostSellsSuccess(res.data));
      } catch (error) {
        console.log(error);
        dispatch(getMostSellsFailure([]));
      }
    };
    fetchProducts();
  }, [selectedCategory]);
  return (
    <>
      <Navbar />
      <Slider />
      <br />

      <div className="container-fluid">
        <div className="row">
          <div
            className="offset-xl-1 col-xl-10 col-12 deal-section"
            style={{ zIndex: "-1" }}
          >
            <div class="deal-header" data-aos="fade-right">
              <h1>
                Up to -40% <span class="icon">🎉</span> Exclusive deals
              </h1>
            </div>
            <div class="categories" data-aos="fade-left">
              <a href="" class="category">
                Vegan
              </a>
              <a href="" class="category">
                Sushi
              </a>
              <a href="" class="category active">
                Pizza & Fast food
              </a>
              <a href="" class="category">
                Others
              </a>
            </div>
          </div>
        </div>
        <div
          className="row  catCardsRow align-items-center justify-content-center"
          style={{ zIndex: "-1" }}
        >
          <div
            class="offerCard"
            data-aos="fade-right"
            data-aos-duration="2000"
            style={{ zIndex: "-1" }}
          >
            <img
              src="/assets/OfferCards/offerCard1.png"
              alt="Chef Burgers London"
            />
            <div class="discount">-40%</div>
            <div class="info">
              <div class="category">Restaurant</div>
              <div class="title">Chef Burgers London</div>
            </div>
          </div>
          <div
            class="offerCard"
            data-aos="zoom-in"
            data-aos-duration="2000"
            style={{ zIndex: "-1" }}
          >
            <img
              src="/assets/OfferCards/offerCard1.png"
              alt="Chef Burgers London"
            />
            <div class="discount">-40%</div>
            <div class="info">
              <div class="category">Restaurant</div>
              <div class="title">Chef Burgers London</div>
            </div>
          </div>
          <div
            class="offerCard"
            data-aos="fade-left"
            data-aos-duration="2000"
            style={{ zIndex: "-1" }}
          >
            <img
              src="/assets/OfferCards/offerCard1.png"
              alt="Chef Burgers London"
            />
            <div class="discount">-40%</div>
            <div class="info">
              <div class="category">Restaurant</div>
              <div class="title">Chef Burgers London</div>
            </div>
          </div>
          {/* {categories.map((item) => {
            return (
              <Link
                to={`/category/${item.name}`}
                key={item.name}
                className="catLink"
              >
                <CategoryCard item={item} />
              </Link>
            );
          })} */}
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="offset-xl-1 text-center col-xl-10 col-12 deal-section">
            <div class="catH">
              <h1 data-aos="fade-right">Popular Categories 🤩</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="offset-xl-1 row catCards">
            {categories?.slice(0, 5)?.map((item) => {
              return (
                <Link
                  to={`/category/${item.name}`}
                  key={item.name}
                  className="catLink"
                >
                  <CategoryCard item={item} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* categories */}

      <div className="container-fluid ">
        <div className="row">
          <div className="offset-xl-1 col-xl-2 col-12" data-aos="zoom-in">
            <div class="menu-container">
              <div class="menu-header" data-aos="zoom-out">
                <img
                  src="/assets/icons/menu.png"
                  alt="Menu Icon"
                  width={35}
                  class="menu-icon"
                />
                <span class="menu-title">Menu</span>
              </div>
              <ul className="menu-list">
                {categories?.map((item) => {
                  return (
                    <li
                      data-aos="fade-right"
                      key={item.name}
                      className={`menu-item ${
                        selectedCategory === item.name ? "active" : ""
                      }`}
                      onClick={() => setSelectedCategory(item.name)}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="col-xl-9 col-12 catCardsDiv">
            <div className="container-fluid">
              <div className="row">
                {mostSellsProducts?.map((item) => {
                  return (
                    <div className="col-md-6 col-12 mb-3">
                      <Card item={item} />
                    </div>
                  );
                })}
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-end align-items-center  mt-4 ">
                  <Link to={`/category/${selectedCategory}`}>
                    <button className="viewMoreBtn" data-aos="zoom-in">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <AboutSection />
      <br />
      <br />
      <br />
      <div className="container-fluid  reviewsSectionDev">
        <div className="row px-md-5 mx-md-5 ">
          <div className="col-12">
            <h1
              className=" text-center text-lg-left mb-4"
              data-aos="fade-right"
            >
              Customer Reviews
            </h1>
          </div>
          <br />
        </div>
        <div
          className="row mt-3  pb-5 px-md-5 mx-md-5 d-flex justify-content-start align-items-center"
          style={{ gap: "0px", flexWrap: "wrap !important" }}
        >
          {reviews?.map((item) => {
            return (
              <div className="col-xl-4 col-12 mb-3 py-3 m-0">
                <ReviewCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
};

export default Home;
