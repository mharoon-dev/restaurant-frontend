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
      <div className="review-card" data-aos="fade-up">
        <div className="user-info">
          <img src={item?.img} alt="User Image" data-aos="fade-down-right" />
          <div className="user-details">
            <h3 data-aos="fade-down">{item?.name}</h3>
            <p data-aos="fade-up">{item?.city}</p>
          </div>
        </div>
        <div className="review-date" data-aos="fade-right">
          <p>{item?.date}</p>
        </div>
        <div className="review-rating" data-aos="fade-left">
          <span>★★★★★</span>
        </div>
        <div className="review-text" data-aos="fade-up">
          <p>{item?.review}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
