import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Cart.css";
import { useEffect } from "react";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <br />
      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product-info">
                <img
                  src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product5.jpg?v=1658199110"
                  alt="Pizza"
                />
                <span>Chessey Pizza</span>
              </td>
              <td className="cartProductPrice">$12.00</td>
              <td className="quantity">
                <input type="number" min="1" />
              </td>
              <td className="cartProductTotal">$12.00</td>
              <td className="remove">
                <button>&times;</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="cart-buttons">
          {/* <button className="update-cart">Update Cart</button> */}
          <Link to="/">
            <button className="continue-shopping">Continue Shopping</button>
          </Link>
        </div>
      </div>

      <div className="cart-totals">
        <div className="cart-totals-title">
          <h2>Cart Totals</h2>
        </div>
        <div className="cart-total-row">
          <span className="total-label">Total</span>
          <span className="total-amount">$12.00</span>
        </div>
        <div className="checkout-btn-container">
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
      <br />

      <Footer />
    </>
  );
};

export default Cart;
