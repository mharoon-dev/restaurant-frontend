import logo from "../../../public/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState, useEffect } from "react";
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

  return (
    <>
      <div class="container-fluid header-container p-0">
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
                {" "}
                <img src="/assets/icons/ShoppingBasket.png" width={30} />
              </Link>
            </div>
            <div className="cart-details p-3 h-100 m-0" style={{}}>
              <span className="cart-total">{cart?.length} items</span>
            </div>
            <div className="cart-details p-3 h-100 m-0" style={{}}>
              <span className="cart-total">GBP {totalAmount.toFixed(2)}</span>
            </div>
            <div className="cart-icon p-3 h-100 m-0" style={{}}>
              <span>
                <img src="/assets/icons/ForwardButton.png" width={30} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="navbar sticky-top navbarContainer"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container-fluid p-3 d-flex justify-content-between">
          <Link to="/" data-aos="fade-right">
            <a className="navbar-brand">
              <img className="ms-4" src={logo} width="150px" alt="" />
            </a>
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
                <Link to="/" className="nav-link ">
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
                <a
                  data-mdb-dropdown-init
                  className={`nav-link`}
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                  onClick={handleDropdownToggle}
                >
                  Restaurants
                  {/* {dropdown ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}
                </a>

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
                                border: "none",
                              }}
                            >
                              <a className="list-group-item list-group-item-action p-4">
                                <img
                                  src={item?.img}
                                  width={50}
                                  alt={item?.name}
                                />
                                &nbsp; {item?.name}
                              </a>
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
                  <img src="/assets/icons/user-icon.png" width={50} />{" "}
                  Login/Signup
                </Link>
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  style={{ width: "55px", borderRadius: "50%" }}
                  alt=""
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
            <MenuIcon style={{ border: "none !important", fontSize: "55px" }} />
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
                  alt=""
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
              <ul className="navbar-nav justify-content-end ">
                <li className={`nav-item}`}>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <a
                      className={`nav-link navLinkA ${
                        isActive("/") ? "activeLi" : ""
                      }`}
                      aria-current="page"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className={`nav-item dropdown position-static`}>
                  <a
                    className={`nav-link navLinkA ${
                      isCategoryActive ? "activeLi" : ""
                    }`}
                    data-mdb-dropdown-init
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    onClick={handleDropdownToggle2}
                  >
                    Restaurants
                  </a>

                  <div
                    className="container"
                    style={{ display: dropdown2 ? "block" : "none" }}
                  >
                    <div className="row my-4">
                      <div className="col-md-6 col-xl-4">
                        <div className="list-group list-group-flush">
                          {catLine1?.map((item) => (
                            <Link
                              to={`/category/${item?.name}`}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              <a className="list-group-item list-group-item-action p-4">
                                <img
                                  src={item?.img}
                                  width={50}
                                  alt={item?.name}
                                />
                                &nbsp;{item?.name}
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item ">
                  <a className="nav-link navLinkA" aria-current="page" href="#">
                    Special Offers
                  </a>
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
                      <img src="/assets/icons/user-icon.png" width={50} />{" "}
                      Login/Signup
                    </Link>
                  ) : (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      style={{ width: "55px", borderRadius: "50%" }}
                      alt=""
                    />
                  )}
                </li>
              </form>
            </div>
          </div>
        </div>
      </nav>

      {/* search modal  */}
      <div>
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
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text sidebarSearchInput pb-0 pe-0"
                  style={{ width: "55px" }}
                  id="basic-addon2"
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
      </div>
    </>
  );
};

export default Navbar;
