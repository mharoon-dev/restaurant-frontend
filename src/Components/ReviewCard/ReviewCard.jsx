import "./ReviewCard.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ReviewCard = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 4000 });
  });
  return (
    <>
      <div className="review-card">
        <div className="user-info">
          <img src={item?.img} alt="User Image" />
          <div className="user-details">
            <h3>{item?.name}</h3>
            <p>{item?.city}</p>
          </div>
        </div>
        <div className="review-date">
          <p>{item?.date}</p>
        </div>
        <div className="review-rating">
          <span>★★★★★</span>
        </div>
        <div className="review-text">
          <p>{item?.review}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
