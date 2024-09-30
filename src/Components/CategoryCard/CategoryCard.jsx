import "./CategoryCard.css";

const CategoryCard = ({ item }) => {
  return (
    <>
      <div className="catMainContainer mx-3">
        <div
          className="categoryContainer"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "150px",
            height: "150px",
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <img
            src={item.image}
            alt="Starters"
            style={{
              width: "300px !important",
              height: "300px !important",
              display: "block",
              margin: "auto",
            }}
          /> */}
        </div>
        <div className="categoryTextContainer">
          <h2 className="text-center categoryText">{item.name}</h2>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
