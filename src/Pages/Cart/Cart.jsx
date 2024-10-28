import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import CloseIcon from "@mui/icons-material/Close";
import "./Cart.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  reset,
  updateCartFailure,
  updateCartStart,
  updateCartSuccess,
} from "../../Redux/Slices/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { url } from "../../../utils/url";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  "pk_test_51PDVVW2MdE2JOYS8Rd1YZfj0TgyH2vagXXRrlLYbaihyFv3tng7cgdL7q2PXebA3kqBz8I63lN4bfzpEGhfw5lDs00CXYwLMpm"
);

const style = {
  paddingTop: "0 !important",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  p: 4,

  "&:focus": {
    outline: "none",
  },

  "@media (max-width: 768px)": {
    width: "100%",
    position: "fixed",
  },
};

const api = axios.create({
  baseURL: url,
});

const Cart = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const user = useSelector((state) => state?.user?.user);
  console.log(user, "user");

  const cart = useSelector((state) => state?.cart?.cart);

  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [open, setOpen] = useState(false);
  const [couponView, setCouponView] = useState(false);
  const [couponInput, setCouponInput] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      alert("Quantity cannot be less than 1");
      return;
    }

    dispatch(updateCartStart());

    const updatedCart = cart?.map((item) =>
      item._id === itemId ? { ...item, quantity: newQuantity } : item
    );

    dispatch(updateCartSuccess(updatedCart));
  };

  const handleCouponApply = async () => {
    try {
      const response = await api.get(
        `/coupens/singlecoupen?code=${couponInput}`
      );
      console.log(response.data);
      console.log("couped response ");

      if (response.data) {
        const sliceData = response.data?.slice(0, 1);
        console.log(sliceData, "sliceData");
        const { discount } = sliceData[0];
        setDiscount(discount);
        setCouponError("");
        setIsCouponApplied(true);
      } else {
        setCouponError("No coupon found!");
      }
    } catch (error) {
      setCouponError("Coupon validation failed. Please try again.");
    }
  };

  const totalAmount = cart
    ?.reduce(
      (acc, item) => acc + item?.selectedVariation?.price * item?.quantity,
      0
    )
    .toFixed(2);

  const discountedAmount = (
    totalAmount -
    (totalAmount * discount) / 100
  ).toFixed(2);

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (paymentMethod === "cash") {
      try {
        const orderResponse = await api.post("/orders", {
          userDetails: user,
          products: cart,
          amount: discountedAmount,
          address,
          phoneNumber,
          cashOnDelivery: true,
          paymentIntentId: "",
        });

        if (orderResponse.status === 200) {
          setPaymentSuccess(true);
          setPaymentError(null);
          setOpen(false);
          dispatch(updateCartStart());
          dispatch(reset([]));
          alert("Order created successfully");
        } else {
          setPaymentError("Order creation failed");
        }
      } catch (error) {
        setPaymentError("Cash on Delivery order failed. Please try again.");
      }
      return;
    }

    if (paymentMethod === "online") {
      const cardElement = elements.getElement(CardElement);

      const totalAmountInPence = Math.round(discountedAmount * 100);

      try {
        const paymentResponse = await api.post("/create-payment-intent", {
          amount: totalAmountInPence,
          currency: "gbp",
        });

        const { clientSecret } = paymentResponse.data;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: user?.userName || "Customer",
            },
          },
        });

        if (paymentResult.error) {
          setPaymentError(paymentResult.error.message);
        } else if (paymentResult.paymentIntent?.status === "succeeded") {
          const orderResponse = await api.post("/orders", {
            userDetails: user,
            products: cart,
            amount: discountedAmount,
            address,
            phoneNumber,
            cashOnDelivery: false,
            paymentIntentId: paymentResult?.paymentIntent?.id,
          });

          if (orderResponse.status === 200) {
            setPaymentSuccess(true);
            setOpen(false);
            setPaymentError(null);
            dispatch(updateCartStart());
            dispatch(reset([]));
          } else {
            setPaymentError("Order creation failed");
          }
        } else {
          setPaymentError("Unexpected payment result");
        }
      } catch (error) {
        setPaymentError("Payment failed. Please try again.");
      }
    }
  };

  useEffect(() => {
    if (!cart || cart?.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  return (
    <>
      <Navbar />

      {cart && cart?.length > 0 ? (
        <div className="container-fluid">
          <div className="row">
            <div className="offset-md-1 col-md-6 col-12">
              {cart?.map((item) => (
                <div key={item?._id} className="product-card">
                  <div className="product-info">
                    <h2>{item?.title}</h2>
                    <div className="spicy-level">
                      <span>🌶️</span>
                    </div>
                    <p className="mb-3">{item?.desc.slice(0, 100)}...</p>
                  </div>
                  <div className="product-image">
                    <img src={item?.img} alt="Pizza" />
                  </div>
                </div>
              ))}
            </div>
            <div className="offset-md-1 col-md-4 col-12 py-3 mt-4">
              <div className="basket-container py-4">
                <div className="basket-header d-flex align-items-center justify-content-center gap-3">
                  <img
                    src="/assets/icons/ShoppingBasket.png"
                    width={40}
                    alt=""
                  />
                  <h2>My Basket</h2>
                </div>
                <div className="basket-items">
                  {cart?.map((item) => (
                    <div key={item?._id} className="basket-item">
                      <div className="item-info">
                        <div>
                          <span className="item-qty">
                            <img src={item?.img} alt="" />
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <div className="item-price">
                            GBP {item?.selectedVariation?.price}
                          </div>
                          <span className="item-name">{item?.title}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Coupon Code Section */}
                {!couponView ? (
                  <div
                    className="coupon-section"
                    onClick={() => setCouponView(true)}
                  >
                    <button className="use-coupon-btn">Use Coupon Code</button>
                  </div>
                ) : (
                  <>
                    {!isCouponApplied ? (
                      <div className="apply-coupon-section">
                        <button
                          className="use-coupon-back-btn"
                          onClick={() => setCouponView(false)}
                        >
                          Back
                        </button>
                        <input
                          type="text"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          placeholder="Enter coupon code"
                        />
                        <button
                          className="apply-coupon-btn"
                          onClick={handleCouponApply}
                        >
                          Apply
                        </button>
                        {couponError && (
                          <div className="error">{couponError}</div>
                        )}
                      </div>
                    ) : (
                      <div>
                        Coupon applied successfully! Discount: {discount}%
                      </div>
                    )}
                  </>
                )}

                {/* Basket Summary */}
                <div className="basket-summary">
                  <div className="summary-item">
                    <span>Sub Total:</span>
                    <span>{"GBP " + discountedAmount}</span>
                  </div>
                  {discount > 0 && (
                    <div className="summary-item">
                      <span>Discount:</span>
                      <span>{discount}%</span>
                    </div>
                  )}
                  <div className="total-pay">
                    <span>Total to pay</span>
                    <span>{"GBP " + discountedAmount}</span>
                  </div>
                </div>
                <div className="checkout-container mb-0">
                  <button className="checkout-btn" onClick={handleOpen}>
                    Checkout!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h2>Cart is empty</h2>
        </div>
      )}

      <Footer />

      {/* Modal for checkout */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 className="orderDetailsHeading">Checkout Details</h3>
          <div className="checkout-section">
            <form onSubmit={handleCheckout}>
              <div className="orderDetailsInputDiv">
                <label>Address</label>
                <input
                  type=""
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="orderDetailsInputDiv">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              <div className="payment-options">
                <button
                  type="button"
                  className="cash-on-delivery-btn"
                  disabled={!address || !phoneNumber}
                  onClick={() => setPaymentMethod("cash")}
                  style={{
                    border: paymentMethod === "cash" ? "3px solid black" : "",
                  }}
                >
                  Cash on Delivery
                </button>
                <button
                  type="button"
                  className="online-payment-btn"
                  disabled={!address || !phoneNumber}
                  onClick={() => setPaymentMethod("online")}
                  style={{
                    border: paymentMethod === "online" ? "3px solid black" : "",
                  }}
                >
                  Online Payment
                </button>
              </div>
              <br />

              {paymentMethod === "online" && (
                <div className="payment-section">
                  <CardElement />
                </div>
              )}

              {paymentMethod && (
                <button
                  type="submit"
                  id="orderBtn"
                  disabled={
                    !address ||
                    !phoneNumber ||
                    (paymentMethod === "online" && !stripe)
                  }
                >
                  Order Now
                </button>
              )}

              {paymentError && <div className="error">{paymentError}</div>}
              {paymentSuccess && (
                <div className="success">
                  Payment Successful! Order Created.
                </div>
              )}
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

const WrappedCart = () => (
  <Elements stripe={stripePromise}>
    <Cart />
  </Elements>
);

export default WrappedCart;
