import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./SingleProduct.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCartStart, addCartSuccess } from "../../Redux/Slices/cartSlice.jsx";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.products);
  const pathName = window.location.pathname.split("/")[2];
  const [product, setProduct] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const mostSellsProducts = useSelector(
    (state) => state.mostSelles.mostSellsProducts
  );
  useEffect(() => {
    console.log("mostSellsProducts", mostSellsProducts);
  }, [mostSellsProducts]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const product = allProducts.find((p) => p._id === pathName);
    console.log(product);

    if (!product) {
      const product = mostSellsProducts.find((p) => p._id === pathName);
      setProduct(product);
    } else {
      setProduct(product);
    }
  }, [pathName, allProducts]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleVariationChange = (variation) => {
    const selectedVar = product.variations.find(
      (singleVariation) => singleVariation === variation
    );
    setSelectedVariation(selectedVar);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value)); // Update quantity from input
  };

  const handleAddToCart = () => {
    if (!selectedVariation) {
      alert("Please select a variation.");
      return;
    }

    if (quantity < 1) {
      alert("Please select a valid quantity.");
      return;
    }

    // Start the cart addition process
    dispatch(addCartStart());

    // Create cart item data with the selected variation and quantity
    const cartItem = {
      ...product,
      selectedVariation, // Add the selected variation
      quantity, // Add the selected quantity
    };

    console.log(cartItem);

    // Dispatch addCartSuccess with the product data
    dispatch(addCartSuccess(cartItem));
  };

  return (
    <>
      <Navbar />
      <div className="singleProductContainer">
        <div className="product-image">
          <img src={product?.img} alt={product?.title} />
        </div>
        <div className="product-details">
          <h1>{product?.title}</h1>
          <p className="price">{product?.price}</p>
          <p className="description">{product?.desc}</p>
          <div className="variations">
            {product?.variations.map((variation) => (
              <div key={variation._id} className="variation">
                <input
                  type="radio"
                  name="variation"
                  value={variation._id}
                  onChange={() => handleVariationChange(variation)}
                />
                <span>
                  {variation.size} | ${variation.price}
                </span>
              </div>
            ))}
          </div>
          <br />
          {/* Quantity input field */}
          <div className="quantity">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
            />
          </div>
          <br />
          <div className="purchase-options">
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <Link to="/cart">
              <button className="buy-now">View Cart</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
