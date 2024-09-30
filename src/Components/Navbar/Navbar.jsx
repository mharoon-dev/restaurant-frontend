import logo from "../../../public/assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDropdownToggle = () => {
    setDropdown((prev) => !prev);
  };
  const handleDropdownToggle2 = () => {
    setDropdown2((prev) => !prev);
  };
  return (
    <>
      <nav
        className="navbar sticky-top navbarContainer"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container-fluid p-3">
          <Link to="/">
            <a className="navbar-brand">
              <img className="ms-4" src={logo} width="150px" alt="" />
            </a>
          </Link>
          <ul className="nav-ul justify-content-center d-flex   flex-grow-1 pe-3">
            <li
              className="ms-5 "
              style={{ listStyle: "none", fontSize: "20px", fontWeight: "600" }}
            >
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li
              className="ms-5 "
              style={{ listStyle: "none", fontSize: "20px", fontWeight: "600" }}
            >
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li
              className="ms-5 nav-item dropdown position-static"
              style={{ listStyle: "none", fontSize: "20px", fontWeight: "600" }}
            >
              <a
                data-mdb-dropdown-init
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                onClick={handleDropdownToggle}
              >
                Menu
              </a>

              <div
                className={`dropdown-menu w-100 mt-0 ${dropdown ? "show" : ""}`}
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
                    {/* <div className="col-md-6 col-xl-3 mb-3 mb-xl-0">
                      <div className="pt-2">
                        <p className="text-uppercase font-weight-bold">
                          Explicabo voluptas
                        </p>
                        <a href="" className="text-body">
                          <div className="row mb-4 border-bottom pb-2">
                            <div className="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                                className="img-fluid shadow-1-strong rounded"
                                alt="Hollywood Sign on The Hill"
                              />
                            </div>
                            <div className="col-9">
                              <p className="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                        <a href="" className="text-body">
                          <div className="row mb-4 border-bottom pb-2">
                            <div className="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                                className="img-fluid shadow-1-strong rounded"
                                alt="Palm Springs"
                              />
                            </div>
                            <div className="col-9">
                              <p className="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                        <a href="" className="text-body">
                          <div className="row mb-4 border-bottom pb-2">
                            <div className="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                                className="img-fluid shadow-1-strong rounded"
                                alt="Los Angeles Skyscrapers"
                              />
                            </div>
                            <div className="col-9">
                              <p className="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                        <a href="" className="text-body">
                          <div className="row mb-4 border-bottom pb-2">
                            <div className="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                                className="img-fluid shadow-1-strong rounded"
                                alt="Skyscrapers"
                              />
                            </div>
                            <div className="col-9">
                              <p className="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div> */}
                    {/* <div className="col-md-6 col-xl-3 mb-3 mb-md-0"></div> */}
                    <div className="col-md-6 col-xl-4">
                      <div className="list-group list-group-flush">
                        <a
                          href=""
                          className="list-group-item list-group-item-action p-4"
                        >
                          <img
                            src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                            width={50}
                            alt=""
                          />
                          &nbsp; Burger
                        </a>{" "}
                        <a
                          href=""
                          className="list-group-item list-group-item-action p-4"
                        >
                          <img
                            src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                            width={50}
                            alt=""
                          />
                          &nbsp; Burger
                        </a>{" "}
                        <a
                          href=""
                          className="list-group-item list-group-item-action p-4"
                        >
                          <img
                            src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                            width={50}
                            alt=""
                          />
                          &nbsp; Burger
                        </a>{" "}
                        <a
                          href=""
                          className="list-group-item list-group-item-action p-4"
                        >
                          <img
                            src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                            width={50}
                            alt=""
                          />
                          &nbsp; Burger
                        </a>
                      </div>
                    </div>{" "}
                    <div className="col-md-6 col-xl-4">
                      <div className="list-group list-group-flush">
                        <a
                          href=""
                          className="list-group-item list-group-item-action p-4"
                        >
                          <img
                            src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                            width={50}
                            alt=""
                          />
                          &nbsp; Burger
                        </a>{" "}
                        <a
                          href=""
                          className="list-group-item list-group-item-action p-4"
                        >
                          <img
                            src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                            width={50}
                            alt=""
                          />
                          &nbsp; Burger
                        </a>{" "}
                        <a
                          href=""
                          className="list-group-item list-group-item-action p-4"
                        >
                          <img
                            src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                            width={50}
                            alt=""
                          />
                          &nbsp; Burger
                        </a>{" "}
                        <a
                          href=""
                          className="list-group-item list-group-item-action p-4"
                        >
                          <img
                            src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                            width={50}
                            alt=""
                          />
                          &nbsp; Burger
                        </a>
                      </div>
                    </div>{" "}
                    <div className="col-md-6 col-xl-4">
                      <div className="list-group list-group-flush">
                        <a
                          href=""
                          className="list-group-item list-group-item-action p-4"
                        >
                          <img
                            src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                            width={50}
                            alt=""
                          />
                          &nbsp; Burger
                        </a>{" "}
                        <a
                          href=""
                          className="list-group-item list-group-item-action p-4"
                        >
                          <img
                            src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                            width={50}
                            alt=""
                          />
                          &nbsp; Burger
                        </a>{" "}
                        <a
                          href=""
                          className="list-group-item list-group-item-action p-4"
                        >
                          <img
                            src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                            width={50}
                            alt=""
                          />
                          &nbsp; Burger
                        </a>{" "}
                        <a
                          href=""
                          className="list-group-item list-group-item-action p-4"
                        >
                          <img
                            src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                            width={50}
                            alt=""
                          />
                          &nbsp; Burger
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="navIconsContainer">
            <SearchIcon onClick={handleOpen} style={{ fontSize: "35px" }} />
            &nbsp; &nbsp; &nbsp;
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <PersonOutlineOutlinedIcon style={{ fontSize: "35px" }} />
            </Link>
            &nbsp; &nbsp; &nbsp;
            <Link to="/cart">
              <ShoppingBagOutlinedIcon
                style={{ fontSize: "35px", color: "black" }}
              />
            </Link>
            &nbsp; &nbsp; &nbsp; &nbsp;
          </div>
          <button
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
            tabindex="-1"
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
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown position-static">
                  <a
                    data-mdb-dropdown-init
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    onClick={handleDropdownToggle2}
                  >
                    Menu
                  </a>

                  <div className="container">
                    <div className="row my-4">
                      {/* <div className="col-md-6 col-xl-3 mb-3 mb-xl-0">
                      <div className="pt-2">
                        <p className="text-uppercase font-weight-bold">
                          Explicabo voluptas
                        </p>
                        <a href="" className="text-body">
                          <div className="row mb-4 border-bottom pb-2">
                            <div className="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                                className="img-fluid shadow-1-strong rounded"
                                alt="Hollywood Sign on The Hill"
                              />
                            </div>
                            <div className="col-9">
                              <p className="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                        <a href="" className="text-body">
                          <div className="row mb-4 border-bottom pb-2">
                            <div className="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                                className="img-fluid shadow-1-strong rounded"
                                alt="Palm Springs"
                              />
                            </div>
                            <div className="col-9">
                              <p className="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                        <a href="" className="text-body">
                          <div className="row mb-4 border-bottom pb-2">
                            <div className="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                                className="img-fluid shadow-1-strong rounded"
                                alt="Los Angeles Skyscrapers"
                              />
                            </div>
                            <div className="col-9">
                              <p className="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                        <a href="" className="text-body">
                          <div className="row mb-4 border-bottom pb-2">
                            <div className="col-3">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                                className="img-fluid shadow-1-strong rounded"
                                alt="Skyscrapers"
                              />
                            </div>
                            <div className="col-9">
                              <p className="mb-2">
                                <strong>Lorem ipsum dolor sit amet</strong>
                              </p>
                              <p>
                                <u>15.07.2020</u>
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div> */}
                      {/* <div className="col-md-6 col-xl-3 mb-3 mb-md-0"></div> */}
                      <div className="col-md-6 col-xl-4">
                        <div className="list-group list-group-flush">
                          <a
                            href=""
                            className="list-group-item list-group-item-action p-4"
                          >
                            <img
                              src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                              width={50}
                              alt=""
                            />
                            &nbsp; Burger
                          </a>{" "}
                          <a
                            href=""
                            className="list-group-item list-group-item-action p-4"
                          >
                            <img
                              src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                              width={50}
                              alt=""
                            />
                            &nbsp; Burger
                          </a>{" "}
                          <a
                            href=""
                            className="list-group-item list-group-item-action p-4"
                          >
                            <img
                              src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                              width={50}
                              alt=""
                            />
                            &nbsp; Burger
                          </a>{" "}
                          <a
                            href=""
                            className="list-group-item list-group-item-action p-4"
                          >
                            <img
                              src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                              width={50}
                              alt=""
                            />
                            &nbsp; Burger
                          </a>
                        </div>
                      </div>{" "}
                      <div className="col-md-6 col-xl-4">
                        <div className="list-group list-group-flush">
                          <a
                            href=""
                            className="list-group-item list-group-item-action p-4"
                          >
                            <img
                              src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                              width={50}
                              alt=""
                            />
                            &nbsp; Burger
                          </a>{" "}
                          <a
                            href=""
                            className="list-group-item list-group-item-action p-4"
                          >
                            <img
                              src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                              width={50}
                              alt=""
                            />
                            &nbsp; Burger
                          </a>{" "}
                          <a
                            href=""
                            className="list-group-item list-group-item-action p-4"
                          >
                            <img
                              src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                              width={50}
                              alt=""
                            />
                            &nbsp; Burger
                          </a>{" "}
                          <a
                            href=""
                            className="list-group-item list-group-item-action p-4"
                          >
                            <img
                              src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                              width={50}
                              alt=""
                            />
                            &nbsp; Burger
                          </a>
                        </div>
                      </div>{" "}
                      <div className="col-md-6 col-xl-4">
                        <div className="list-group list-group-flush">
                          <a
                            href=""
                            className="list-group-item list-group-item-action p-4"
                          >
                            <img
                              src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                              width={50}
                              alt=""
                            />
                            &nbsp; Burger
                          </a>{" "}
                          <a
                            href=""
                            className="list-group-item list-group-item-action p-4"
                          >
                            <img
                              src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                              width={50}
                              alt=""
                            />
                            &nbsp; Burger
                          </a>{" "}
                          <a
                            href=""
                            className="list-group-item list-group-item-action p-4"
                          >
                            <img
                              src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                              width={50}
                              alt=""
                            />
                            &nbsp; Burger
                          </a>{" "}
                          <a
                            href=""
                            className="list-group-item list-group-item-action p-4"
                          >
                            <img
                              src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product1_b3f9f868-d4ab-412e-a3f2-4e80de595785.jpg?v=1658199114"
                              width={50}
                              alt=""
                            />
                            &nbsp; Burger
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <form
                className="d-flex justify-content-center align-items-center mt-3"
                role="search"
              >
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
                        style={{
                          fontSize: "35px",
                          color: "#458c00 !important",
                        }}
                      />
                    </button>
                  </span>
                </div>

                <div style={{ display: "flex", marginTop: "-15px" }}>
                  <PersonOutlineOutlinedIcon
                    style={{
                      marginLeft: "10px",
                      fontSize: "35px",
                    }}
                  />
                  <Link to="/cart">
                    <ShoppingBagOutlinedIcon
                      style={{ fontSize: "35px", color: "black" }}
                    />
                  </Link>
                </div>
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
                      style={{
                        fontSize: "35px",
                        color: "#458c00 !important",
                      }}
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
