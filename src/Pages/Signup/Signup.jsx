import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { url } from "../../../utils/url.js";
import { useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: url,
});

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [cNo, setCNo] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !cNo || !address || !password) {
      alert("Please fill all the fields");
      return;
    }

    try {
      let data = { userName: username, email, contact: cNo, address, password, zipCode };
      console.log(data, "====>> data");

      const response = await api.post("/auth/signup", data);
      console.log(response?.data);

      localStorage.setItem(
        "resUserToken",
        JSON.stringify(response?.data?.token)
      );
      // alert("Signup Successful");
      navigate("/otp");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signupContainer">
      <div className="header">
        <h1>
          <span className="s">S</span>ignup
        </h1>
      </div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="username">UserName</label>
        <input
          type=""
          className="inp"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="inp"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="cNo">Contact Number</label>
        <input
          type="tel"
          className="inp"
          name="cNo"
          onChange={(e) => setCNo(e.target.value)}
          required
        />
        <label htmlFor="address">Address</label>
        <input
          type="tel"
          className="inp"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="tel"
          className="inp"
          name="zipCode"
          onChange={(e) => setZipCode(e.target.value)}
          required
        />


        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="inp"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" id="signupBtn">
          Enter
        </button>
      </form>
      <div className="signup">
        <b>Already have an account?</b>
        <a>
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>{" "}
        </a>
      </div>
    </div>
  );
};

export default Signup;
