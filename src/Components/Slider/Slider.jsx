import "./Slider.css";

const Slider = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active position-relative">
          <img
            src="https://foodic-store-demo.myshopify.com/cdn/shop/files/slideshowV1-bg1.jpg?v=1658203510"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-content">
            <p style={{ color: "white", fontWeight: "bold" }}>FOODIC STORE</p>
            <h1>Delicious Burger</h1>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="carousel-item position-relative">
          <img
            src="https://foodic-store-demo.myshopify.com/cdn/shop/files/slideshowV1-bg2.jpg?v=1658203511"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-content">
            <p style={{ color: "white", fontWeight: "bold" }}>SPECIAL OFFER</p>
            <h1>Deliver And Freshly </h1>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev sliderBtn"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next sliderBtn"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
