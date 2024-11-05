import "./UserProfile.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { url } from "../../../utils/url.js";
import { useState } from "react";
import {
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../../Redux/Slices/userSlice.jsx";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const api = axios.create({
  baseURL: url,
});

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [selectedItem, setSelectedItem] = useState("Details");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    userName: user?.userName,
    email: user?.email,
    contact: user?.contact,
    address: user?.address,
    zipCode: user?.zipCode,
  });
  const userOrders = useSelector((state) => state.userOrders.orders);
  console.log(userOrders);

  // Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Toggle edit mode
  const toggleEdit = () => setIsEditing(!isEditing);

  // Handle update
  const handleUpdate = async () => {
    try {
      dispatch(updateUserStart());
      const response = await api.put(`/users/${user._id}`, formData);
      dispatch(updateUserSuccess(response.data));

      alert("Profile updated successfully");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user:", error);
      dispatch(updateUserFailure());
    }
  };

  return (
    <div>
      <div className="container-fluid ">
        <div
          className="row my-3 p-0 m-0 d-flex align-items-center justify-content-start"
          style={{
            height: "100vh",
          }}
        >
          <div className="col-lg-3 mb-4 mb-lg-0 col-12  text-left">
            <li
              style={{
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.50)",
                color:
                  setSelectedItem === "Details"
                    ? "var(--white-color)"
                    : "var(--black-color)",
                borderRadius: "5px",
              }}
              className={`profileList ${
                selectedItem === "Details" && "selectedItem"
              }`}
              onClick={() => {
                setSelectedItem("Details");
                setIsEditing(false);
              }}
            >
              <PersonIcon />
              &nbsp; Details
            </li>
            <li
              style={{
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.50)",
                color:
                  setSelectedItem === "Edit Profile"
                    ? "var(--white-color)"
                    : "var(--black-color)",
                borderRadius: "5px",
              }}
              className={`profileList ${
                selectedItem === "Edit Profile" && "selectedItem"
              }`}
              onClick={() => {
                setSelectedItem("Edit Profile");
                toggleEdit();
              }}
            >
              <EditIcon />
              &nbsp; Edit Profile
            </li>
            <li
              style={{
                boxShadow: "0px 10px 10px 0px rgba(0,0,0,0.50)",
                color:
                  selectedItem === "Orders"
                    ? "var(--white-color)"
                    : "var(--black-color)",
                borderRadius: "5px",
              }}
              className={`profileList ${
                selectedItem === "Orders" && "selectedItem"
              }`}
              onClick={() => {
                setSelectedItem("Orders");
                setIsEditing(false);
              }}
            >
              <ShoppingCartIcon />
              &nbsp; Orders
            </li>
          </div>

          <div
            className="offset-xl-2 col-lg-4 col-12 text-center d-flex flex-column align-items-center justify-content-center"
            style={{
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.50)",
              backgroundColor: "var(--white-color)",
              padding: "50px",
              borderRadius: "10px",
            }}
          >
            {isEditing ? (
              <>
                <img
                  src={
                    user?.img ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt=""
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                  }}
                />
                <input
                  style={{ border: "2px solid lightgray" }}
                  className="mt-4"
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder="Username"
                />
                <input
                  style={{ border: "2px solid lightgray" }}
                  className="mt-4"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <input
                  style={{ border: "2px solid lightgray" }}
                  className="mt-4"
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Contact"
                />
                <input
                  style={{ border: "2px solid lightgray" }}
                  className="mt-4"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                />
                <input
                  style={{ border: "2px solid lightgray" }}
                  className="mt-4"
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="Zip Code"
                />
                <button onClick={handleUpdate} className="mt-4 updateBtn">
                  Update
                </button>
              </>
            ) : selectedItem === "Orders" ? (
              <div className="ordersContainer">
                {userOrders.length > 0 ? (
                  userOrders.map((order) => (
                    <div key={order._id} className="orderItem">
                      <div className="d-flex flex-wrap justify-content-lg-between justify-content-center align-items-center">
                        <p>Order ID: {order._id}</p>
                        <p>Status: {order.status}</p>
                        <p>Total Amount: ${order.amount}</p>
                        <p>Delivery Address: {order.address}</p>
                        <p>Phone Number: {order.phoneNumber}</p>
                        <p>
                          Order Date:{" "}
                          {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                      </div>

                      <h4>Products:</h4>
                      <div className="d-flex flex-wrap justify-content-between align-items-center">
                        {order.products.map((product) => (
                          <div
                            key={product._id}
                            className="productItem d-flex flex-wrap justify-content-lg-between justify-content-center align-items-center"
                          >
                            <img
                              src={product.img}
                              alt={product.title}
                              style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "8px",
                              }}
                            />
                            <p>Product: {product.title}</p>
                            <p>Quantity: {product.quantity}</p>
                            <p>Category: {product?.categories?.join(", ")}</p>
                            <p>Size: {product.selectedVariation?.size}</p>
                            <p>Price: ${product?.selectedVariation?.price}</p>
                          </div>
                        ))}
                      </div>
                      <hr />
                    </div>
                  ))
                ) : (
                  <p>No orders found.</p>
                )}
              </div>
            ) : (
              <>
                <img
                  src={
                    user?.img ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt=""
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                  }}
                />
                <h1 id="profileUserName">
                  UserName : <span>{user?.userName}</span>
                </h1>
                <h1 id="profileUserName">
                  Email : <span>{user?.email}</span>
                </h1>
                <h1 id="profileUserName">
                  Contact : <span>{user?.contact}</span>
                </h1>
                <h1 id="profileUserName">
                  Address : <span>{user?.address}</span>
                </h1>
                <h1 id="profileUserName">
                  zipCode : <span>{user?.zipCode}</span>
                </h1>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
