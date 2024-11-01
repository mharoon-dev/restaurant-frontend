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
import { Link, useNavigate } from "react-router-dom";
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
import {
  getDealsFailure,
  getDealsStart,
  getDealsSuccess,
} from "../../Redux/Slices/dealsSlice.jsx";

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
  const deals = useSelector((state) => state?.deals?.deals);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Deals state in component:", deals);
  }, [deals]);

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
    const fetchDeals = async () => {
      try {
        dispatch(getDealsStart());
        const res = await api.get("/deals/deals");
        console.log("Fetched deals data:", res.data); // Check if data is fetched
        dispatch(getDealsSuccess(res.data));
      } catch (error) {
        console.error("Error fetching deals:", error); // Capture any errors
        dispatch(getDealsFailure([]));
      }
    };
    fetchDeals();
  }, [dispatch]); // Add `dispatch` as dependency to avoid warnings

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

      <div
        className="container-fluid position-relative "
        style={{ zIndex: "-1 !important" }}
      >
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
                style={{ zIndex: "99",position:"relative" }}
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
      </div>

      <div className="container-fluid position-relative indexClass">
        <div className="row">
          <div className="offset-xl-1 text-center col-xl-10 col-12 deal-section">
            <div className="catH">
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

      <div
        className="container-fluid position-relative indexClass"
        style={{ zIndex: "-1 !important" }}
        data-aos="fade-right"
      >
        <div className="row">
          <div className=" offset-xl-1  col-xl-2 col-12">
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
                    <li
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
            <div className="container-fluid ">
              <div className="row gap-5 d-flex jsustify-content-center align-items-center  mt-0 p-0 flex-wrap">
                {mostSellsProducts?.slice(0, 3)?.map((item) => {
                  return <Card category={selectedCategory} item={item} />;
                })}
              </div>
              <div className="row">
                <div className="col-12 text-end  mt-4 ">
                  <button className="viewMoreBtn">
                    <Link
                      to={`/category/${selectedCategory}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      View More&nbsp;&nbsp;&nbsp;
                      <img
                        src={"/assets/icons/Arrow-01.png"}
                        style={{
                          width: "30%",
                          height: "50%",
                        }}
                        alt=""
                      />
                    </Link>
                  </button>
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
      <div
        className="container-fluid position-relative reviewsSectionDev indexClass"
        style={{ zIndex: "-1 !important" }}
      >
        <div className="row px-md-5 mx-md-5 ">
          <div className="col-12">
            <h1 className=" text-center text-lg-left mb-4">Customer Reviews</h1>
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
                <ReviewCard key={item._id} item={item} />
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
