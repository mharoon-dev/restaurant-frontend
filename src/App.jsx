import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Categories from "./Pages/Categories/Categories.jsx";
import Category from "./Pages/Category/Category.jsx";
import SingleProduct from "./Pages/SingleProduct/SingleProduct.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import { useEffect, useState } from "react";
import Signup from "./Pages/Signup/Signup.jsx";
import Login from "./Pages/Login/Login.jsx";
import Otp from "./Pages/Otp/Otp.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "./Redux/Slices/userSlice";
import { url } from "../utils/url.js";
import axios from "axios";
import {
  productsFailure,
  productsStart,
  productsSuccess,
} from "./Redux/Slices/productsSlice.jsx";
import Privacy from "./Pages/Privacy/Privacy.jsx";


const api = axios.create({
  baseURL: url,
});

function App() {
  const pathName = window.location.pathname.split("/")[1];
  useEffect(() => {
    console.log(pathName);
  }, [pathName]);

  // if (pathName !== "/products") {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  // console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    const isUserLoggedIn = async () => {
      // Get the token from localStorage
      const resUserToken = localStorage.getItem("resUserToken");

      // Check if the token exists
      if (!resUserToken) {
        dispatch(loginFailure());
        console.log("No token found");
        return;
      }

      // Parse the token only if it's not undefined
      let parsedToken;
      try {
        parsedToken = JSON.parse(resUserToken);
      } catch (error) {
        console.log("Error parsing token", error);
        return;
      }

      dispatch(loginStart());

      try {
        const res = await api.get("/auth/isuserloggedin", {
          headers: { authorization: `Bearer ${parsedToken}` },
        });

        if (res.data) {
          // console.log(res?.data);
          dispatch(loginSuccess(res?.data?.data));
        }
      } catch (error) {
        console.log(error);
        dispatch(loginFailure(error));
      }
    };

    isUserLoggedIn();
  }, [dispatch]);

  const offersCard = [
    {
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/files/bannerV1-img1.jpg?v=1658224390",
      p: "FRIED",
      h5: "Big Sale 30% Off",
      button: "Order Now",
    },
    {
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/files/bannerV1-img2.jpg?v=1658224390",
      p: "NEW ARRIVALS",
      h5: "Burger Beef",
      button: "Order Now",
    },
    {
      image:
        "https://foodic-store-demo.myshopify.com/cdn/shop/files/bannerV1-img3.jpg?v=1658224390",
      p: "BLACK FRIDAY",
      h5: "Sale Up To 40% Off",
      button: "Order Now",
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<Home offersCard={offersCard} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route
        path="/category/:category"
        element={<Category offersCard={offersCard} />}
      />
      <Route
        path="/product/:product"
        element={<SingleProduct offersCard={offersCard} />}
      />
      <Route
        path="/categories"
        element={<Categories offersCard={offersCard} />}
      />
    </Routes>
  );
}

export default App;
