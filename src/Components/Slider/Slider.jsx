import "./Slider.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Slider = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      style={{
        zIndex: "-1",
      }}
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-aos="fade-up"
    >
      <div className="carousel-inner">
        <div className="carousel-item active position-relative">
          <img
            src="/assets/Slider/img.png"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-content">
            <p>Order Restaurant food, takeaway and groceries.</p>
            <h1>Feast Your Senses,</h1>
            <h1 className="span">Fast and Fresh</h1>
            <button data-aos="fade-left" data-aos-duration="1000">
              Shop Now
            </button>
          </div>
        </div>
        {/* <div className="carousel-item position-relative">
          <img
            src="/assets/Slider/img.png"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-content">
            <p style={{ color: "white", fontWeight: "bold" }}>
              Order Restaurant food, takeaway and groceries.
            </p>
            <h1>Feast Your Senses</h1>
            <h1>Fast and Fresh</h1>
            <button>Shop Now</button>
          </div>
        </div> */}
      </div>
      {/* <button
        className="carousel-control-prev sliderBtn"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next sliderBtn"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  );
};

export default Slider;
