import React, { useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({ imgSize, item }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div class="meal-card my-3" data-aos="zoom-in">
        <div class="meal-text" data-aos="fade-right">
          <h2>{item?.title}</h2>
          <p>{item?.desc.slice(0, 130)}...</p>
          {item?.variations && (
            <p class="price">${item?.variations[0]?.price}</p>
          )}
        </div>
        <div class="meal-image">
          <img src={item?.img} data-aos="fade-left" alt="Meal image" />
          <p class="meal-name">{item?.name}</p>
        </div>
        {item?.variations && (
          <Link to={`/product/${item?._id}`}>
            <button class="add-btn">
              <img src="/assets/icons/ShoppingBasket.png" width={40} alt="" />
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Card;
