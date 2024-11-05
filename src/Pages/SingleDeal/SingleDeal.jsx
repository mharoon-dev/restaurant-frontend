import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./SingleDeal.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCartStart, addCartSuccess } from "../../Redux/Slices/cartSlice.jsx";

const SingleDeal = () => {
  const dispatch = useDispatch();
  const allDeals = useSelector((state) => state.deals.deals); // Assume deals are stored in Redux
  const pathName = window.location.pathname.split("/")[2];
  const [deal, setDeal] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const deal = allDeals.find((d) => d._id === pathName);
    if (deal) setDeal(deal);
  }, [pathName, allDeals]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value)); // Update quantity from input
  };

  const handleAddToCart = () => {
    if (quantity < 1) {
      alert("Please select a valid quantity.");
      return;
    }

    // Start the cart addition process
    dispatch(addCartStart());

    // Create cart item data with the deal details and quantity
    const cartItem = {
      ...deal,
      quantity, // Add the selected quantity
    };

    console.log(cartItem);

    // Dispatch addCartSuccess with the deal data
    dispatch(addCartSuccess(cartItem));
    alert("Added to cart");
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div className="singleDealContainer">
        <div className="singleDeal-image">
          <img src={deal?.img} alt={deal?.title} />
        </div>
        <div className="deal-details">
          <h1>{deal?.title}</h1>
          <p className="price">GBP {deal?.price.toFixed(2)}</p>
          <p className="description">{deal?.description}</p>
          <div className="deal-products">
            <h3>Products Included:</h3>
            <ul>
              {deal?.productsIncluded.map((product) => (
                <li key={product._id}>
                  {product.selectedVariation.size} - GBP{" "}
                  {product.selectedVariation.price}
                </li>
              ))}
            </ul>
          </div>
          <div className="deal-duration">
            <p>Available on: {deal?.daysOfWeek.join(", ")}</p>
            <p>
              From: {new Date(deal?.startDate).toLocaleDateString()} to{" "}
              {new Date(deal?.endDate).toLocaleDateString()}
            </p>
            <p>
              Time: {deal?.startTime} - {deal?.endTime}
            </p>
          </div>
          <br />
          {/* Quantity input field */}
          <div className="quantity">
            <label htmlFor="quantity">Quantity:&nbsp;</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
            />
          </div>
          <br />
          <div className="purchase-options">
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add Deal to Cart
            </button>
            <Link to="/cart" className="ViewCart">
              View Cart
            </Link>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default SingleDeal;
