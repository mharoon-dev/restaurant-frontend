import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./SingleProduct.css";
import { useEffect } from "react";

const SingleProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="singleProductContainer">
        <div className="product-image">
          <img
            src="https://foodic-store-demo.myshopify.com/cdn/shop/products/product5.jpg?v=1658199110"
            alt="Chessy Pizza"
          />
        </div>
        <div className="product-details">
          <h1>Chessey Pizza</h1>
          <p className="price">$12.00 USD</p>
          <p className="description">
            The Best Dishes Experimentation in the kitchen and focus on
            excellence are among our main driving forces in cooking. We have a
            proper passion for cooking. Love is the secret ingredient that makes
            all our meals taste better and magical.
          </p>
          {/* <div className="offer">
            <h3>Special Offer</h3>
            <ul>
              <li>In Stock</li>
              <li>Free Delivery Available*</li>
              <li>Sale 30% Off - Use Code: Deal30</li>
            </ul>
          </div> */}
          {/* <div className="stock-info">
            <p>
              <strong>22</strong> sold in the last <strong>30 hours</strong>
            </p>
            <p className="hurry">
              Hurry! Only <strong>16</strong> left in stock
            </p>
          </div> */}
          {/* <div className="size-guide">
            <a href="#">Size Guide</a> |<a href="#">Delivery & Return</a> |
            <a href="#">Ask a Question</a>
          </div> */}
          <div className="purchase-options">
            <div className="quantity">
              <label for="quantity">Quantity&nbsp;&nbsp;</label>
              <input type="number" id="quantity" value="1" min="1" />
            </div>
            <button className="add-to-cart">Add to Cart</button>
            <Link to="/cart">
              <button className="buy-now">View Cart</button>
            </Link>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
