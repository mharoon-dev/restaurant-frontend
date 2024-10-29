import React, { useEffect, useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({ category, imgSize, item }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    // Flip the card when category changes
    setFlipped(true);
    const timeoutId = setTimeout(() => setFlipped(false), 1000); // Duration of flip animation
    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [category]);

  return (
    <div className={`meal-card mb-3 p-0 ${flipped ? "flip" : ""}`}>
      <div className="meal-card-inner">
        <div className="meal-card-front">
          <div className="meal-image">
            <img src={item?.img} alt="Meal image" />
            <p className="meal-name">{item?.name}</p>
          </div>
          <div className="meal-text">
            <h2>{item?.title}</h2>
            <p>{item?.desc.slice(0, 130)}...</p>
            {item?.variations && (
              <p className="price">GBP{item?.variations[0]?.price}</p>
            )}
          </div>
        </div>
        {item?.variations && (
          <Link to={`/product/${item?._id}`}>
            <button className="add-btn">
              <img src="/assets/icons/ShoppingBasket.png" width={50} alt="" />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
