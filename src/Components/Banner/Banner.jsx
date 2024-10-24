import "./Banner.css";

const Banner = ({ img, text }) => {
  return (
    <>
      <div
        className="container-fluid bannerContainerFluid"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "470px",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "darken",
        }}
      >
        <div className="container h-100">
          <div className="row d-flex h-100 align-items-center justify-content-center">
            <div className="col-12 h-100 text-center text-white d-flex align-items-center justify-content-center ">
              <h1 className="bannerText">{text}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
