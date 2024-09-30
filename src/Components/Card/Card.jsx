import React from "react";

const Card = ({ imgSize, item }) => {
  return (
    <>
      <div className="card mx-md-3 mx-0 p-0" style={{ width: "20rem", border: "none" }}>
        <img
          src={item.image}
          className="card-img-top w-100"
          style={{
            width: imgSize ? imgSize : "100%",
          }}
          alt="..."
        />
        <div className="card-body text-center">
          <h5 className="card-title text-center" style={{ fontSize: "18px" }}>
            {item.name}
          </h5>
          <p
            className="card-text text-center"
            style={{ color: "#458c00", fontWeight: "700" }}
          >
            {item.price ? item.price : `(${item.totalProducts})` || " "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
