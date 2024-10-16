import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../Redux/Slices/userSlice";
import { url } from "../../../utils/url.js";

const api = axios.create({
  baseURL: url,
});

const Login = () => {
  const user = useSelector((state) => state?.user?.user);
  console.log(user);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !email) {
      alert("Please fill all the fields");
      return;
    }

    try {
      dispatch(loginStart());

      let data = { email, password };
      const response = await api.post("/auth/login", data);
      console.log(response?.data);

      localStorage.setItem(
        "resUserToken",
        JSON.stringify(response?.data?.token)
      );

      dispatch(loginSuccess(response?.data?.data));
      alert("Login Successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(loginFailure(error));
      alert(error?.response?.data?.message);
    }
  };
  return (
    <>
      <div className="loginContainer">
        <div className="header">
          <h1>
            <span className="l">L</span>OGIN
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="inp"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="inp"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
          <button type="submit" id="loginBtn">
            Login
          </button>
        </form>
        <div className="signup">
          <b>Don't have account?</b>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <a>Sign up</a>
          </Link>{" "}
        </div>
      </div>
    </>
  );
};

export default Login;
