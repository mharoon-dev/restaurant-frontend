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
      <div class="review-card" data-aos="fade-up">
        <div class="user-info">
          <img src={item?.img} alt="User Image" data-aos="fade-down-right" />
          <div class="user-details">
            <h3 data-aos="fade-down">{item?.name}</h3>
            <p data-aos="fade-up">{item?.city}</p>
          </div>
        </div>
        <div class="review-date" data-aos="fade-right">
          <p>{item?.date}</p>
        </div>
        <div class="review-rating" data-aos="fade-left">
          <span>★★★★★</span>
        </div>
        <div class="review-text" data-aos="fade-up">
          <p>{item?.review}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
