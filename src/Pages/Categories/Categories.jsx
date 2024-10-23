import { useState, useEffect } from "react";
import "./Categories.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Card from "../../Components/Card/Card.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";

const Categories = ({ offersCard }) => {
  const categories = useSelector((state) => state.categories.categories);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(categories);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredCategories(categories);
    } else {
      setFilteredCategories(
        categories.filter((category) =>
          category.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, categories]);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="offset-xl-1 col-xl-10 col-12 deal-section">
            <div className="deal-header">
              <h1>
                Up to -40% <span className="icon">🎉</span> Exclusive deals
              </h1>
            </div>
            <div className="categories">
              <a href="#" className="category">
                Vegan
              </a>
              <a href="#" className="category">
                Sushi
              </a>
              <a href="#" className="category active">
                Pizza & Fast food
              </a>
              <a href="#" className="category">
                Others
              </a>
            </div>
          </div>
        </div>

        <div className="offer-section container">
          <h1 className="offers-title">All Offers from McDonald’s East London</h1>
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

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center catHeading">All Categories</h1>
            </div>
          </div>
          <div className="row allCatCardsRow d-flex align-items-center justify-content-center flex-wrap gap-4">
            {filteredCategories.map((item) => {
              return (
                <Link
                  to={`/category/${item.name}`}
                  key={item.name}
                  style={{ textDecoration: "none" }}
                  className="catLink"
                >
                  <Card item={item} />
                </Link>
              );
            })}
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

export default Categories;
