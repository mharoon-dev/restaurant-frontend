import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);
  return (
    <>
      <footer className="footer-section">
        <div className="container-fluid">
          <div className="footer-cta pt-5 pb-5"></div>
          <div className="footer-content pt-5 pb-5">
            <div className="row ">
              <div className="offset-xl-1 col-xl-3 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img
                        src="/assets/logo.png"
                        className="img-fluid"
                        alt="logo"
                      />
                    </a>
                  </div>
                  {/* <img
                    src="/assets/Footer/footerImg.png"
                    width={200}
                    alt="Footer Image"
                  /> */}
                  <div className="footer-text">
                    <p>
                      <br />
                      Company # 490039-445, Registered with House of companies.
                    </p>
                    <p>+91 1234567890</p>
                  </div>
                </div>
              </div>

              <div className="offset-xl-1 col-xl-3 col-lg-3 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Get Exclusive Deals in your Inbox</h3>
                  </div>

                  <div className="subscribe-form">
                    <div className="subscribe-container">
                      <form>
                        <input
                          type="email"
                          placeholder="youremail@gmail.com"
                          className="email-input"
                          required
                        />
                        <button className="subscribe-btn">Subscribe</button>
                      </form>
                    </div>
                  </div>
                  {/* <div className="footer-text mb-25">
                    <p>we wont spam, read our email policy</p>
                  </div> */}

                  <div className="footer-social-icon">
                    <br />
                    <br />
                    <ul className="d-flex flex-row align-items-center justify-content-start">
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="/assets/icons/fb.png" width={30} alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="/assets/icons/t.png" width={30} alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/assets/icons/tiktok.png"
                            width={30}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/assets/icons/insta.png"
                            width={30}
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="offset-xl-1 col-xl-2 col-lg-2 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Legal Pages</h3>
                  </div>
                  <ul>
                    <li>
                      <Link
                        to="/terms"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <a href="">Terms and conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy">
                        <a href="">Privacy</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/delivery"
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        <a href="">Delivery Policy</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="col-xl-2 col-lg-2 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Important Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="">Get help</a>
                    </li>
                    <li>
                      <a href="">Add your restaurant</a>
                    </li>
                    <li>
                      <a href="">Sign up to deliver</a>
                    </li>
                    <li>
                      <a href="">Create a business account</a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2018, All Rights Reserved
                    <a href="https://codepen.io/anupkumar92/"> Anup</a>
                  </p>
                </div>
              </div>

              {/* <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="">Terms</a>
                    </li>
                    <li>
                      <a href="">Pricing</a>
                    </li>
                    <li>
                      <a href="">
                        Do not sell or share my personal information
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
