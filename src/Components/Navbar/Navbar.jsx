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
  const cartBoxRef = useRef(null); // Add a ref to the cart box
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const [catLine1, setCatLine1] = useState([]);
  const [catLine2, setCatLine2] = useState([]);
  const [catLine3, setCatLine3] = useState([]);
  const user = useSelector((state) => state?.user?.user);
  const cart = useSelector((state) => state?.cart?.cart);
  const isActive = (path) => location.pathname === path;
  const isCategoryActive = location.pathname.startsWith("/category");
  const categories = useSelector((state) => state?.categories?.categories);
  const totalAmount = cart?.reduce(
    (acc, item) => acc + item?.selectedVariation?.price * item?.quantity,
    0
  );

  useEffect(() => {
    Aos.init({ duration: 2000 });
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

  // Function to close cart box when clicking outside
  const handleClickOutside = (event) => {
    if (cartBoxRef.current && !cartBoxRef.current.contains(event.target)) {
      setCartBox(false); // Close cartBox when clicking outside
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

  return (
    <>
      <div className="container-fluid header-container p-0">
        {cartBox && (
          <>
            <div
              className="overlay"
              data-aos="fade-right"
              //  data-aos="zoom-in"
            ></div>
            <div
              className="col-lg-3 d-flex justify-content-end col-12 p-3 pe-0 pt-0 pb-0 my-0 cartBox"
              data-aos="fade-left"
              style={{
                height: "100vh",
                zIndex: "100",
              }}
              ref={cartBoxRef} // Attach the ref here
            >
              <div className="basket-container py-4">
                <div
                  className="basket-header d-flex align-items-center justify-content-center gap-3"
                  data-aos="fade-right"
                >
                  <img
                    src="/assets/icons/ShoppingBasket.png"
                    width={40}
                    alt=""
                  />
                  <h2>My Basket</h2>
                </div>
                <div className="basket-items">
                  {cart?.map((item) => (
                    <div
                      key={item?._id}
                      className="basket-item"
                    >
                      <div className="item-info">
                        <div>
                          <span className="item-qty">{item?.quantity}x</span>
                        </div>
                        <div className="d-flex flex-column">
                          <div className="item-price">
                            GBP {item?.selectedVariation?.price}
                          </div>
                          <span className="item-name">{item?.title}</span>
                          <p className="item-details">
                            {item?.desc.slice(0, 50)}...
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="basket-summary">
                  <div className="summary-item">
                    <span data-aos="fade-right">Sub Total:</span>
                    <span data-aos="fade-left">{"GBP " + totalAmount}</span>
                  </div>
                  <div className="total-pay" 
                  >
                    <span>Total to pay</span>
                    <span>{"GBP " + totalAmount}</span>
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
        <div className="container-fluid d-flex justify-content-md-around justify-content-center align-items-center">
          <div className="promo-section" data-aos="zoom-in">
            <span className="promo-text">🌟 Get 5% Off your first order, </span>
            <span className="promo-code">
              <strong> Promo:ORDER5</strong>
            </span>
          </div>

          <div className="cart-section p-0 m-0" data-aos="fade-down">
            <div className="cart-icon p-3 h-100 m-0" style={{}}>
              <Link to="/cart">
                <img src="/assets/icons/ShoppingBasket.png" width={30} />
              </Link>
            </div>
            <div className="cart-details p-3 h-100 m-0" style={{}}>
              <span className="cart-total">{cart?.length} items</span>
            </div>
            <div className="cart-details p-3 h-100 m-0" style={{}}>
              <span className="cart-total">GBP {totalAmount.toFixed(2)}</span>
            </div>
            <div
              className="cart-icon p-3 h-100 m-0"
              onClick={() => setCartBox((prev) => !prev)}
            >
              <span>
                <img src="/assets/icons/ForwardButton.png" width={30} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="navbar navbarContainer"
        style={{
          backgroundColor: "#fff",
          position: "relative !important",
          width: "100%",
        }}
      >
        <div
          className="container-fluid p-3 d-flex justify-content-between"
          style={{
            zIndex: "9",
          }}
        >
          <Link to="/" className="nav-logo" data-aos="fade-right">
            <img className="ms-4" src={logo} width="150px" alt="" />
          </Link>
          <div className="nav-ul" data-aos="fade-left">
            <ul className="nav-ul justify-content-end d-flex flex-grow-1 pe-3">
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
                  onClick={handleDropdownToggle}
                >
                  Restaurants
                </span>

                <div
                  className={`dropdown-menu w-100 mt-0 ${
                    dropdown ? "show" : ""
                  }`}

                  aria-labelledby="navbarDropdown"
                  style={{
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    left: 0,
                    top: "90%",
                    zIndex: "999 !important",
                  }}
                >
                  <div className="container">
                    <div className="row my-4">
                      <div className="col-lg-6 col-xl-4">
                        <div className="list-group list-group-flush">
                          {catLine1?.map((item) => (
                            <Link
                              key={item?._id}
                              to={`/category/${item?.name}`}
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              <span className="list-group-item list-group-item-action p-4">
                                <img
                                  src={item?.img}
                                  width={50}
                                  alt={item?.name}
                                />
                                &nbsp; {item?.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className="ms-5"
                style={{
                  listStyle: "none",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                <Link to="/special-offers" className="nav-link">
                  Special Offers
                </Link>
              </li>

              <li
                className="ms-5"
                style={{
                  listStyle: "none",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                <Link to="/track-order" className="nav-link">
                  Track Order
                </Link>
              </li>
            </ul>

            <li
              className="ms-xl-5 rightBtn "
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
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  style={{ width: "55px", borderRadius: "50%" }}
                  alt="User Profile"
                />
              )}
            </li>
          </div>
          <button
            data-aos="fade-left"
            className="hamburger"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <MenuIcon style={{ fontSize: "55px" }} />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img
                  src="https://foodic-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1658832482"
                  width="100px"
                  alt="Shop Logo"
                />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown position-static">
                  <span
                    className="nav-link"
                    id="navbarDropdown"
                    role="button"
                    onClick={handleDropdownToggle2}
                  >
                    Restaurants
                  </span>

                  <div
                    className="container"
                    style={{ display: dropdown2 ? "block" : "none" }}
                  >
                    <div className="row my-4">
                      <div className="col-md-6 col-xl-4">
                        <div className="list-group list-group-flush">
                          {catLine1?.map((item) => (
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
                <li className="nav-item">
                  <span className="nav-link">Special Offers</span>
                </li>
              </ul>

              <form
                className="d-flex justify-content-center align-items-center"
                role="search"
              >
                <li
                  className="ms-xl-5 rightBtn py-3"
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
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      style={{ width: "55px", borderRadius: "50%" }}
                      alt="User Profile"
                    />
                  )}
                </li>
              </form>
            </div>
          </div>
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
    </>
  );
};

export default Navbar;
