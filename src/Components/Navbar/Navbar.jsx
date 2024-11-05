import logo from "../../../public/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState, useEffect, useRef } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";
import { url } from "../../../utils/url";
import { useDispatch, useSelector } from "react-redux";
import StorefrontIcon from "@mui/icons-material/Storefront";
import {
  getCategoriesFailure,
  getCategoriesStart,
  getCategoriesSuccess,
} from "../../Redux/Slices/categoriesSlice.jsx";
import Aos from "aos";
import "aos/dist/aos.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

const api = axios.create({
  baseURL: url,
});

const Navbar = () => {
  const location = useLocation();
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartBox, setCartBox] = useState(false);
  const cartBoxRef = useRef(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const [catLine1, setCatLine1] = useState([]);
  const [catLine2, setCatLine2] = useState([]);
  const [catLine3, setCatLine3] = useState([]);
  const user = useSelector((state) => state?.user?.user);
  const cart = useSelector((state) => state?.cart?.cart);
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const isActive = (path) => location.pathname === path;
  const isCategoryActive = location.pathname.startsWith("/category");
  const categories = useSelector((state) => state?.categories?.categories);
  const [searchQuery, setSearchQuery] = useState("");
  const totalAmount = cart?.reduce(
    (acc, item) =>
      acc + (item?.selectedVariation?.price || item?.price) * item?.quantity,
    0
  );
  const [catSidebar, setCatSidebar] = useState(false);
  const [rightSidebar, setRightSidebar] = useState(false);

  useEffect(() => {
    console.log(rightSidebar);
  }, [rightSidebar]);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (categories?.length > 0) {
      setCatLine1(categories?.slice(0, 6));
      setCatLine2(categories?.slice(6, 12));
      setCatLine3(categories?.slice(12, 18));
    }
  }, [categories]);

  const handleDropdownToggle = () => {
    setDropdown((prev) => !prev);
  };

  const handleDropdownToggle2 = () => {
    setDropdown2((prev) => !prev);
  };

  const dropDownDisplay = () => {
    setDropDown(!dropDown);
  };

  const dropDownDisplay2 = () => {
    setDropDown2(!dropDown);
  };

  const dropDown2Display = () => {
    setDropDown2(!dropDown2);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        dispatch(getCategoriesStart());
        const { data } = await api.get("/categories");
        dispatch(getCategoriesSuccess(data));
      } catch (error) {
        console.log(error);
        dispatch(getCategoriesFailure());
        alert(error);
      }
    };
    getCategories();
  }, []);

  const handleClickOutside = (event) => {
    if (cartBoxRef.current && !cartBoxRef.current.contains(event.target)) {
      setCartBox(false);
    }
  };

  useEffect(() => {
    if (cartBox) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartBox]);

  function openNav() {
    // document.getElementById("mySidenav").style.width = "450px";
    // document.getElementsByClassName("overlayDiv").style.display = "block";
    setCatSidebar(true);
  }

  function closeNav() {
    // document.getElementById("mySidenav").style.width = "0";
    // document.getElementsByClassName("overlayDiv").style.display = "none";
    setCatSidebar(false);
    setDropDown2(false);
    setDropDown(false);
  }

  const handleLogout = () => {
    localStorage.removeItem("resUserToken");
  };

  function openRightSidebar() {
    setRightSidebar(true);
  }

  function closeRightSidebar() {
    setRightSidebar(false);
    setDropDown2(false);
    setDropDown(false);
  }

  const filteredCategories = categories?.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* user dropDown 1  */}
      <div
        className="dropDown1"
        style={{ display: dropDown ? "block" : "none" }}
      >
        <ul>
          <li>
            <Link className="dropdown-item" to="/userProfile">
              Profile
            </Link>
          </li>
          <li onClick={handleLogout}>
            <Link className="dropdown-item">Logout</Link>
          </li>
        </ul>
      </div>

      {/* user dropDown 2*/}
      <div
        className="dropDown2"
        style={{ display: dropDown2 ? "block" : "none" }}
      >
        <ul>
          <li>
            <Link className="dropdown-item" to="/userProfile">
              Profile
            </Link>
          </li>
          <li onClick={handleLogout}>
            <Link className="dropdown-item">Logout</Link>
          </li>
        </ul>
      </div>

      <div className="container-fluid header-container p-0">
        {cartBox && (
          <>
            <div
              className="overlay"
              data-aos="fade-right"
              data-aos-duration="300"
            ></div>
            <div
              id="cartBoxNav"
              className="col-lg-3 d-flex justify-content-end col-12 p-3 pe-0 pt-0 pb-0 my-0 cartBox"
              style={{ height: "100vh" }}
              data-aos="fade-left"
              data-aos-duration="300"
              ref={cartBoxRef}
            >
              <div className="basket-container py-4">
                <div className="basket-header d-flex align-items-center justify-content-center gap-3">
                  <img
                    src="/assets/icons/ShoppingBasket.png"
                    width={40}
                    alt=""
                  />
                  <h2>My Basket</h2>
                </div>
                <div className="basket-items">
                  {cart?.map((item) => (
                    <div key={item?._id} className="basket-item">
                      <div className="item-info">
                        <div>
                          <span className="item-qty">
                            <img src={item?.img} alt="" />
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <div className="item-price">
                            GBP{" "}
                            {item?.selectedVariation?.price.toFixed(2) ||
                              item?.price.toFixed(2)}
                          </div>
                          <span className="item-name">{item?.title}</span>
                          <p className="item-details">
                            {item?.desc?.slice(0, 50) ||
                              item?.description?.slice(0, 50)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="basket-summary">
                  <div className="summary-item">
                    <span>Sub Total:</span>
                    <span>{"GBP " + totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="total-pay">
                    <span>Total to pay</span>
                    <span>{"GBP " + totalAmount.toFixed(2)}</span>
                  </div>
                </div>
                <div className="checkout-container mb-0">
                  <button className="checkout-btn">
                    <Link
                      to="/cart"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Checkout!
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        {/* <div className="container-fluid d-flex justify-content-md-around justify-content-center align-items-center">
          <div className="promo-section" data-aos="zoom-in">
            <span className="promo-text">🌟 Get 5% Off your first order, </span>
            <span className="promo-code">
              <strong> Promo:ORDER5</strong>
            </span>
          </div>

          
        </div> */}
      </div>

      {/* main navbar */}
      <nav
        className="navbar navbarContainer"
        style={{ backgroundColor: "#fff" }}
      >
        <div
          className="container-fluid p-3 d-flex justify-content-between"
          style={{ zIndex: "9" }}
        >
          <Link to="/" className="nav-logo">
            <img className="ms-4" src={logo} width="150px" alt="" />
          </Link>
          <div className="nav-ul">
            <ul className="nav-ul justify-content-end d-flex flex-grow-1 pe-0">
              <li
                className={`ms-5 ${isActive("/") ? "activeLi" : ""}`}
                style={{
                  listStyle: "none",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={`ms-5 nav-item dropdown position-static ${
                  isCategoryActive ? "activeLi" : ""
                }`}
                style={{
                  listStyle: "none",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                <span
                  className="nav-link"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded="false"
                  style={{ cursor: "pointer" }}
                  onClick={openNav}
                >
                  Menu
                </span>
              </li>
              <li
                className={`ms-5 ${isActive("/faqs") ? "activeLi" : ""}`}
                style={{
                  listStyle: "none",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                <Link to="/faqs" className="nav-link">
                  FAQS
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-ul">
            <li>
              <div className="cart-section p-0 m-0" data-aos="fade-down">
            <div className="cart-icon p-3 h-100 m-0">
              <img src="/assets/icons/ShoppingBasket.png" width={30} />
            </div>
            <div className="cart-details p-3 h-100 m-0">
              <span className="cart-total">{cart?.length} items</span>
            </div>
            <div className="cart-details p-3 h-100 m-0">
              <span className="cart-total">GBP {totalAmount.toFixed(2)}</span>
            </div>
            <div
              className="cart-icon p-3 h-100 m-0"
              onClick={() => setCartBox((prev) => !prev)}
            >
              <span style={{ cursor: "pointer" }}>
                <img src="/assets/icons/ForwardButton.png" width={30} />
              </span>
            </div>
          </div>
            </li>
            <li
              className="ms-xl-5 rightBtn"
              style={{ listStyle: "none", fontSize: "20px", fontWeight: "600" }}
            >
              
              {!user ? (
                <Link to="/login" className="authBtn">
                  <img
                    src="/assets/icons/user-icon.png"
                    width={50}
                    alt="Login Icon"
                  />
                  Login/Signup
                </Link>
              ) : (
                <img
                  onClick={() => dropDownDisplay()}
                  src={
                    user?.img ||
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  style={{ width: "55px", borderRadius: "50%" }}
                  alt="User Profile"
                />
              )}
            </li>
          </div>
          <button
            className="hamburger"
            type="button"
            onClick={() => openRightSidebar()}
          >
            <MenuIcon style={{ fontSize: "55px" }} />
          </button>
        </div>
      </nav>

      {/* search modal  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control sidebarSearchInput"
                placeholder="Search"
              />
              <span
                className="input-group-text sidebarSearchInput pb-0 pe-0"
                style={{ width: "55px" }}
              >
                <button className="btn p-0" type="submit">
                  <SearchIcon
                    style={{ fontSize: "35px", color: "#458c00 !important" }}
                  />
                </button>
              </span>
            </div>
          </Typography>
        </Box>
      </Modal>

      {/* left sidebar */}
      <div className={` ${catSidebar || rightSidebar ? "overlay" : ""}`}></div>
      <div
        id="mySidenav"
        style={{ width: catSidebar ? "450px" : "0" }}
        className="sidenav"
      >
        <a className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div className="d-flex justify-content-center align-items-center">
          <div className="input-group  m-3 ms-0 w-75 sidebarSearchInput">
            <input
              type="text"
              className="form-control"
              placeholder="Search Categories"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="input-group-text  p-0" style={{ width: "55px" }}>
              <button className="btn p-0" type="submit">
                <SearchIcon
                  style={{
                    fontSize: "35px",
                    color: "var(--main-color) !important",
                  }}
                />
              </button>
            </span>
          </div>
        </div>
        {filteredCategories
          ? filteredCategories?.map((item) => (
              <Link
                key={item?._id}
                to={`/category/${item?.name.split(" ").join("-")}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span
                  className={` list-group-item list-group-item-action p-4 ${
                    isActive("/category/" + item?.name.split(" ").join("-"))
                      ? "activeLeftSidebar"
                      : ""
                  }`}
                >
                  <img src={item?.img} width={50} alt={item?.name} />
                  &nbsp;{item?.name}
                </span>
              </Link>
            ))
          : "No categories found"}
      </div>

      {/* right dropDown */}
      {rightSidebar && (
        <div
          id="mySidenav"
          style={{ width: setRightSidebar ? "300px" : "0" }}
          className="sidenav2"
        >
          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <img src="/assets/logo.png" width={100} alt="" />
                <a className="closebtn" onClick={closeRightSidebar}>
                  &times;
                </a>
              </div>
            </div>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end ">
              <li
                style={{
                  fontWeight: "500",
                  color: isActive("/") && "var(--white-color)",
                }}
                className={`nav-item p-2 text-center  ${
                  isActive("/") ? "activeLi" : ""
                }`}
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </Link>
              </li>
              <li
                style={{ fontWeight: "500" }}
                className={`nav-item p-2 text-center ${
                  isCategoryActive ? "activeLi" : ""
                }`}
              >
                <span
                  className="text-center"
                  id="navbarDropdown"
                  role="button"
                  onClick={handleDropdownToggle2}
                >
                  Menu
                </span>
                <div
                  className="container"
                  style={{ display: dropdown2 ? "block" : "none" }}
                >
                  <div className="row my-4">
                    <div className="col-xl-4">
                      <div className="list-group list-group-flush">
                        {filteredCategories?.slice(0, 6).map((item) => (
                          <Link
                            key={item?._id}
                            to={`/category/${item?.name}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <span className="list-group-item list-group-item-action p-4">
                              <img
                                src={item?.img}
                                width={50}
                                alt={item?.name}
                              />
                              &nbsp;{item?.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  fontWeight: "500",
                  color: isActive("/faqs") && "var(--white-color)",
                }}
                className={`nav-item p-2 text-center  ${
                  isActive("/faqs") ? "activeLi" : ""
                }`}
              >
                <span className="text-center">
                  <Link
                    to={"/faqs"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    FAQS
                  </Link>
                </span>
              </li>
              <br />
            </ul>
            <form
              className="d-flex justify-content-center align-items-center"
              role="search"
            >
              <li
                className="ms-xl-5 rightBtn"
                style={{
                  listStyle: "none",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                {!user ? (
                  <Link to="/login" className="authBtn">
                    <img
                      src="/assets/icons/user-icon.png"
                      width={50}
                      alt="Login Icon"
                    />
                    Login/Signup
                  </Link>
                ) : (
                  <img
                    onClick={() => dropDownDisplay2()}
                    src={
                      user?.img ||
                      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    }
                    style={{ width: "55px", borderRadius: "50%" }}
                    alt="User Profile"
                  />
                )}
              </li>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
