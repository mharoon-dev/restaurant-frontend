import "./AboutSection.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutSection = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  // console.log(item);
  return (
    <>
      <div className="container-fluid">
        <div className="row pb-3">
          <div className="offset-xl-1 col-xl-10 col-12 deal-section ps-0">
            <div className="deal-header">
              <h1
                style={{ fontWeight: "700", fontSize: "32px" }}
                data-aos="fade-right"
              >
                Know more about us!
              </h1>
              <br />
            </div>
            <div className="categories" data-aos="fade-left">
              <a href="#" className="category">
                Frequent Questions
              </a>
              <a href="#" className="category">
                Who we are?
              </a>
              <a href="#" className="category active">
                Partner Program
              </a>
              <a href="#" className="category">
                Help & Support
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            style={{ backgroundColor: "var(--black-color)" }}
            className="offset-md-1 col-md-4 col-12 d-flex justify-content-between align-items-center"
          >
            <div className="faq-section" data-aos="zoom-in">
              <h2 className="mt-4 mt-md-0">How does Order.UK work?</h2>
              <ul>
                <li>What payment methods are accepted?</li>
                <li>Can I track my order in real-time?</li>
                <li>
                  Are there any special discounts or promotions available?
                </li>
                <li>Is Order.UK available in my area?</li>
              </ul>
            </div>
          </div>

          <div
            className="col-md-6 col-12 align-items-center"
            style={{ backgroundColor: "var(--black-color)" }}
          >
            <div className="info-section">
              <div className="info-box" data-aos="fade-left">
                <h3 style={{ color: "var(--black-color)" }}>Track Progress</h3>
                <img src="/assets/aboutSection/3.png" alt="Track Progress" />
                <p>You can track your order status with delivery time</p>
              </div>
              <div className="info-box" data-aos="zoom-in">
                <h3 style={{ color: "var(--black-color)" }}>Place an Order!</h3>
                <img src="/assets/aboutSection/2.png" alt="Place Order" />
                <p>Place order through our website or Mobile app</p>
              </div>

              <div className="info-box" data-aos="fade-right">
                <h3 style={{ color: "var(--black-color)" }}>Get your Order!</h3>
                <img src="/assets/aboutSection/1.png" alt="Get your Order" />
                <p>Receive your order at lightning fast speed!</p>
              </div>
            </div>

            <div className="description-section" data-aos="zoom-in-up">
              <p>
                Order.UK simplifies the food ordering process. Browse through
                our diverse menu, select your favorite dishes, and proceed to
                checkout. Your delicious meal will be on its way to your
                doorstep in no time!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
