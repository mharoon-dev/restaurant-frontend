import "./Slider.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../../../utils/url";

const api = axios.create({
  baseURL: url,
});

const Slider = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    console.log("slider:", sliders);
  }, [sliders]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    // fecth slider
    const fetchSlider = async () => {
      try {
        const response = await api(`/sliders`);
        console.log(response);
        setSliders(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSlider();
  }, []);

  return (
    <>
      {sliders?.map((slider) => {
        return (
          <>
            <div style={{ position: "relative" }}>
              {/* Notification Card */}
              <div
                className="notification"
                data-aos="zoom-in"
                id="notification1"
              >
                <div className="notification-content">
                  <div className="title">{slider?.card1}</div>
                </div>
                {/* <div className="notification-footer">now</div> */}
              </div>

              <div
                className="notification"
                data-aos="zoom-in"
                id="notification2"
              >
                <div className="notification-content">
                  <div className="title">{slider?.card2}</div>
                </div>
                {/* <div className="notification-footer">now</div> */}
              </div>

              <div
                className="notification"
                data-aos="zoom-in"
                id="notification3"
              >
                <div className="notification-content">
                  <div className="title">{slider?.card3}</div>
                </div>
                {/* <div className="notification-footer">now</div> */}
              </div>

              {/* Slider */}
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
                      src={slider?.img}
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-content">
                      <p>{slider?.smallPara}</p>
                      <h1>{slider?.heading1}</h1>
                      <h1 className="span">{slider?.heading2}</h1>
                      <button data-aos="fade-left" data-aos-duration="1000">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Slider;
