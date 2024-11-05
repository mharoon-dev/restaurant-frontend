import "./CategoryCard.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CategoryCard = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  // console.log(item);
  return (
    <>
      <div
        className="col-3 card border-0 catCard catCardHover"
        data-aos="fade-right"
        style={{ width: "16rem" }}
      >
        <img src={item?.img} className="" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-left">{item?.name}</h5>
          {/* <h5 className="text-left totalProductsCount ">32 products</h5> */}
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
