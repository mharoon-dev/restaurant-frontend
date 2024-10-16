import "./CategoryCard.css";
import Aos from "aos";  
import "aos/dist/aos.css";
import { useEffect } from "react";

const CategoryCard = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  })
  // console.log(item);
  return (
    <>
      <div class="col-3 card border-0 catCard" data-aos="fade-right" style={{ width: "18rem" }}>
        <img src={item?.img} class="" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-left">{item?.name}</h5>
          {/* <h5 class="text-left totalProductsCount ">32 products</h5> */}
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
