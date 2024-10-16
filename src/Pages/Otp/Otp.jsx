import { Link } from "react-router-dom";
import "./Otp.css";
import { useState } from "react";
import { url } from "../../../utils/url";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../Redux/Slices/userSlice.jsx";

const api = axios.create({
  baseURL: url,
});

const Otp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resUserToken = JSON.parse(localStorage.getItem("resUserToken"));
    try {
      !otp && alert("Please enter otp");

      dispatch(loginStart());
      let data = { otp };
      const response = await api.post("/auth/verifyEmail", data, {
        headers: {
          authorization: `Bearer ${resUserToken}`,
        },
      });
      console.log(response.data);
      dispatch(loginSuccess(response?.data?.data));
      alert("otp verified");
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(loginFailure(error?.response?.data?.message));
    }
  };
  return (
    <>
      <div className="otpContainer">
        <div className="header">
          <h1>
            <span className="l">O</span>tp
          </h1>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="otp">OTP</label>
          <input
            type=""
            className="inp"
            name="otp"
            required
            onChange={(e) => setOtp(e.target.value)}
          />
          <button type="submit" id="loginBtn">
            Enter
          </button>
        </form>
        <div className="signup">
          <b>Don't have account?</b>
          <Link to="/otpBtn" style={{ textDecoration: "none" }}>
            <a>Sign up</a>
          </Link>{" "}
        </div>
      </div>
    </>
  );
};

export default Otp;
