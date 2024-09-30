import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./OfferCard.css";
const OfferCard = ({item}) => {
  return (
    <>
      <div className="col-md-4 my-3 col-12 offerCardContainer">
        <img
          src={item.image}
          alt=""
        />
        <div className="offerCardContent">
          <p>{item.p}</p>
          <h5>Big Sale 30% Off</h5>
          <button>
            Order Now{" "}
            <KeyboardArrowRightIcon
              fontSize="small"
              style={{ marginTop: "-2px", marginLeft: "-5px" }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
