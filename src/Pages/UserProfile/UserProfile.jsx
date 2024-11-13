import "./UserProfile.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { url } from "../../../utils/url.js";
import { useEffect, useState } from "react";
import {
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../../Redux/Slices/userSlice.jsx";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

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
  const [selectedOrder, setSelectedOrder] = useState(null);

  const addOrSubtractDaysFromDate = (days, add, startingDate = new Date()) => {
    if (add) return new Date(new Date().setDate(startingDate.getDate() + days));
    else return new Date(new Date().setDate(startingDate.getDate() - days));
  };
  const timeSince = (date) => {
    if (typeof date !== "object") {
      date = new Date(date);
    }
    const seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);
    let interval = 0;
    let intervalType = "";
    const intervals = {
      year: 31536000,
      month: 2592000,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };
    for (const [key, value] of Object.entries(intervals)) {
      interval = Math.floor(seconds / value);
      if (interval >= 1) {
        intervalType = key;
        break;
      }
    }
    if (interval > 1 || interval === 0) {
      intervalType += "s";
    }
    return `${interval} ${intervalType} ago`;
  };

  const projectData = [
    {
      name: 564,
      startDate: addOrSubtractDaysFromDate(1, true),
      time: "10:00 AM",
      status: "Success",
    },
    {
      name: 720,
      startDate: addOrSubtractDaysFromDate(5, true),
      time: "10:00 AM",
      status: "Success",
    },
    {
      name: 486,
      startDate: addOrSubtractDaysFromDate(12, true),
      time: "10:00 AM",
      status: "Success",
    },
    {
      name: 250,
      startDate: addOrSubtractDaysFromDate(21, true),
      time: "10:00 AM",
      status: "Success",
    },
    {
      name: 100,
      startDate: addOrSubtractDaysFromDate(36, true),
      time: "10:00 AM",
      status: "Success",
    },
  ];

  // date function
  const addOrSubtractMinutesFromDate = (
    minutes,
    add,
    startingDate = new Date()
  ) => {
    if (add)
      return new Date(
        new Date().setMinutes(startingDate.getMinutes() + minutes)
      );
    else
      return new Date(
        new Date().setMinutes(startingDate.getMinutes() - minutes)
      );
  };

  const getProjectStatusVariant = (status) => {
    let statusVariant = "success";
    if (status === "Pending") statusVariant = "danger";
    else if (status === "Work in Progress") statusVariant = "info";
    else if (status === "Coming soon") statusVariant = "warning";
    return statusVariant;
  };

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
  const [tab, setTab] = useState("Orders");

  const activityData = [
    {
      name: "John Doe",
      title: "Uploaded a photo",
      images: ["asd", "sa"],
      time: addOrSubtractMinutesFromDate(5),
    },
    {
      name: "Lorem",
      title: "commented your post",
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."',
      time: addOrSubtractMinutesFromDate(30),
    },
    {
      name: "Jessi",
      title: "attended a meeting with John Doe",
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."',
      time: addOrSubtractMinutesFromDate(59),
    },
    {
      name: "John Doe",
      title: "Uploaded 2 new photos",
      images: ["asd", "sa"],
      time: addOrSubtractMinutesFromDate(5),
    },
    {
      name: "Lorem",
      title: "commented your post",
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."',
      time: addOrSubtractMinutesFromDate(30),
    },
    {
      name: "Jessi",
      title: "attended a meeting with John Doe",
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet tellus ut tincidunt euismod."',
      time: addOrSubtractMinutesFromDate(59),
    },
  ];

  // selected order
  const selectedOrderHandler = (order) => {
    console.log(order);
    setSelectedOrder(order);
  };

  useEffect(() => {
    if (selectedOrder) {
      setTab("");
    }
  }, [selectedOrder]);

  return (
    <>
      {/* <div>
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
    </div>  */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {/* cover photo */}
            <div
              className="profile-bg-picture"
              style={{
                backgroundImage: `url(${"/assets/bg-profile.jpg"})`,
                backgroundPosition: "bottom",
              }}
            ></div>

            {/* content */}
            <div className="p-sm-3 p-0 profile-user">
              <row className="g-2 row">
                <div className="col-lg-3 col-12 ">
                  <div className="profile-user-img p-2 text-start">
                    <img
                      src={"https://randomuser.me/api/portraits/men/3.jpg"}
                      alt="avatar"
                      className="img-thumbnail avatar-lg rounded"
                    />
                  </div>
                  <div className="text-start p-1 pt-2">
                    <h4
                      className=" fs-17 ellipsis"
                      style={{ textTransform: "capitalize" }}
                    >
                      {user?.userName}
                    </h4>
                    {/* <p className="font-13"> {user?.email}</p> */}
                    {/* <p className="text-muted mb-0">
                      <small>California, United States</small>
                    </p> */}
                    <div className="d-flex pt-3 align-items-center justify-content-center flex-xl-nowrap flex-lg-wrap justify-content-md-start">
                      <button
                        type="button"
                        className="me-sm-2 mt-1 icons-center editProfileBtn"
                      >
                        {/* <IconifyIcon icon="mdi:cog" className="align-text-bottom me-1 fs-16 lh-1" /> */}
                        Edit Profile
                      </button>
                      {/* <button variant="soft-info" className="mt-1">
                        Following
                      </button> */}
                    </div>
                  </div>
                  <div className="pt-3 ps-2">
                    <p className="text-muted mb-2 font-13">
                      <strong>Full Name :</strong>{" "}
                      <span
                        className="ms-2"
                        style={{ textTransform: "capitalize" }}
                      >
                        {user?.userName}
                      </span>
                    </p>
                    <p className="text-muted mb-2 font-13">
                      <strong>Mobile :</strong>
                      <span className="ms-2">{user?.contact}</span>
                    </p>
                    <p className="text-muted mb-2 font-13">
                      <strong>Email :</strong>{" "}
                      <span className="ms-2">{user?.email}</span>
                    </p>
                    <p className="text-muted mb-1 font-13">
                      <strong>Address :</strong>{" "}
                      <span className="ms-2">{user?.address}</span>
                    </p>
                    <p className="text-muted mb-1 font-13">
                      <strong>Zip Code :</strong>{" "}
                      <span className="ms-2">{user?.zipCode}</span>
                    </p>
                  </div>
                  {/* <div className="text-start mt-4">
                    <h4>Fllow On:</h4>
                    <div className="d-flex gap-2 mt-3">
                      <button className="btn px-2 py-1 btn-soft-primary">
                         <IconifyIcon icon="mdi:facebook" /> 
                      </button>
                      <button className="btn px-2 py-1 btn-soft-danger">
                         <IconifyIcon icon="mdi:google-plus" /> 
                      </button>
                      <button className="btn px-2 py-1 btn-soft-info">
                         <IconifyIcon icon="mdi:twitter" /> 
                      </button>
                      <button className="btn px-2 py-1 btn-soft-dark">
                         <IconifyIcon icon="mdi:github" /> 
                      </button>
                    </div>
                  </div> */}
                </div>
                <div className="col-lg-8 col-12 bg-light-subtle">
                  <div className="profile-content p-0 m-0">
                    <div class="container p-0 m-0">
                      <div class="d-flex justify-content-center p-3">
                        <ul
                          class="nav nav-pills gap-2 text-center"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          {/* <li class="nav-item mt-2" role="presentation">
                            <a
                              onClick={() => setTab("about")}
                              class="nav-link fs-5 p-2 active"
                              id="about-tab"
                              data-bs-toggle="pill"
                              href="#aboutme"
                              role="tab"
                              aria-controls="aboutme"
                              aria-selected="true"
                            >
                              About
                            </a>
                          </li>
                          <li class="nav-item mt-2" role="presentation">
                            <a
                              onClick={() => setTab("activity")}
                              class="nav-link fs-5 p-2"
                              id="activity-tab"
                              data-bs-toggle="pill"
                              href="#activity"
                              role="tab"
                              aria-controls="activity"
                              aria-selected="false"
                            >
                              Activities
                            </a>
                          </li>
                          <li class="nav-item mt-2" role="presentation">
                            <a
                              onClick={() => setTab("setting")}
                              class="nav-link fs-5 p-2"
                              id="setting-tab"
                              data-bs-toggle="pill"
                              href="#setting"
                              role="tab"
                              aria-controls="setting"
                              aria-selected="false"
                            >
                              Settings
                            </a>
                          </li> */}
                          <li
                            class={
                              ` mt-2 profileBtn ` +
                              (tab === "Edit" ? "activedTabBtn" : "")
                            }
                            onClick={() => setTab("Edit")}
                          >
                            Edit
                          </li>
                          <li
                            class={
                              `mt-2 profileBtn ` +
                              (tab === "Orders" ? "activedTabBtn" : "")
                            }
                            onClick={() => setTab("Orders")}
                          >
                            Orders
                          </li>
                        </ul>
                      </div>

                      <div
                        className="tab-content m-0 p-2 p-sm-4"
                        id="v-pills-tabContent"
                      >
                        {/* <div
                          className={`tab-pane fade  ${
                            tab === "about" ? "show active " : ""
                          }  `}
                          id="aboutme"
                        >
                          <div className="profile-desk">
                            <h5 className="text-uppercase fs-17 text-dark">
                              Johnathan Deo
                            </h5>
                            <div className="designation mb-3">
                              PRODUCT DESIGNER (UX / UI / Visual Interaction)
                            </div>
                            <p className="text-muted fs-16">
                              I have 10 years of experience designing for the
                              web, and specialize in the areas of user interface
                              design, interaction design, visual design and
                              prototyping. I’ve worked with notable startups
                              including Pearl Street Software.
                            </p>
                            <h5 className="mt-4 fs-17 text-dark">
                              Contact Information
                            </h5>
                            <table className="table table-condensed table-bordered mb-0 border-top table-striped">
                              <tbody>
                                <tr>
                                  <th scope="row">Url</th>
                                  <td>
                                    <Link to="" className="ng-binding">
                                      www.example.com
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Email</th>
                                  <td>
                                    <Link to="" className="ng-binding">
                                      jonathandeo@example.com
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Phone</th>
                                  <td className="ng-binding">(123)-456-7890</td>
                                </tr>
                                <tr>
                                  <th scope="row">Skype</th>
                                  <td>
                                    <Link to="" className="ng-binding">
                                      jonathandeo123
                                    </Link>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div> */}
                        {/* <div
                          class={`tab-pane fade ${
                            tab === "Orders" ? "show active" : ""
                          } `}
                          id="activity"
                        >
                          <div className="timeline-2">
                            {activityData?.map((activity, idx) => (
                              <div className="time-item" key={idx}>
                                <div className="item-info ms-3 mb-3">
                                  <div className="text-muted">
                                    {timeSince(activity.time)}
                                  </div>
                                  <p>
                                    <Link to="" className="text-info">
                                      {activity.name}
                                    </Link>
                                    {activity.title}
                                  </p>
                                  {activity.images &&
                                    activity.images.map((image, idx) => (
                                      <img
                                        src={image}
                                        alt=""
                                        height={40}
                                        width={60}
                                        className="rounded-1 me-1"
                                        key={idx}
                                      />
                                    ))}
                                  {activity.description && (
                                    <p>
                                      <em>{activity.description}</em>
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div> */}
                        {/* <div
                          class={`tab-pane fade ${
                            tab === "setting" ? "show active" : ""
                          }`}
                          id="setting"
                        >
                          <p>Settings content goes here</p>
                        </div> */}

                        <div
                          class={`tab-pane fade ${
                            tab === "Edit" ? "show actived" : ""
                          }`}
                          id=""
                        >
                          <row className="row m-t-10">
                            <div className="col-md-12">
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
                              <button
                                onClick={handleUpdate}
                                className="mt-4 updateBtn"
                              >
                                Update
                              </button>
                            </div>
                          </row>
                        </div>
                        <div
                          class={`tab-pane fade ${
                            tab === "Orders" ? "show actived" : ""
                          }`}
                          id="project"
                        >
                          <row className="row m-t-10">
                            <div className="col-md-12">
                              <div className="table-responsive">
                                <table className="table table-bordered mb-0 table-striped table-hover">
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>Amount</th>
                                      <th>Date</th>
                                      <th>Time</th>
                                      <th>Status</th>
                                    </tr>
                                  </thead>
                                  <tbody className="table-group-divider">
                                    {userOrders?.map((project, idx) => (
                                      <tr
                                        key={idx}
                                        onClick={() =>
                                          selectedOrderHandler(project)
                                        }
                                      >
                                        <td>{idx + 1}</td>
                                        <td>GBP {project?.amount}</td>

                                        <td>
                                          {project.createdAt.slice(2, 10)}
                                        </td>
                                        <td>
                                          {new Date(
                                            project.createdAt
                                          ).toLocaleTimeString("en-US", {
                                            hour: "numeric",
                                            minute: "numeric",
                                            hour12: true,
                                          })}
                                        </td>

                                        <td>
                                          <span
                                            className={`badge bg-${getProjectStatusVariant(
                                              project.status
                                            )}`}
                                          >
                                            {project.status}
                                          </span>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </row>
                        </div>

                        <div
                          class={`tab-pane fade ${
                            tab === "" ? "show actived" : ""
                          }`}
                          id="project"
                        >
                          <row className="row m-t-10">
                            <div className="col-md-12">
                              <div className="table-responsive">
                                <table className="table table-bordered mb-0 table-striped table-hover">
                                  <thead>
                                    <tr>
                                      <th>Amount</th>
                                      <th>Date</th>
                                      <th>Time</th>
                                      <th>Status</th>
                                    </tr>
                                  </thead>
                                  <tbody className="table-group-divider">
                                    <tr>
                                      <td>GBP {selectedOrder?.amount}</td>

                                      <td>
                                        {selectedOrder?.createdAt.slice(2, 10)}
                                      </td>
                                      <td>
                                        {new Date(
                                          selectedOrder?.createdAt
                                        ).toLocaleTimeString("en-US", {
                                          hour: "numeric",
                                          minute: "numeric",
                                          hour12: true,
                                        })}
                                      </td>

                                      <td>
                                        <span
                                          className={`badge bg-${getProjectStatusVariant(
                                            selectedOrder?.status
                                          )}`}
                                        >
                                          {selectedOrder?.status}
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>

                                {/* products */}
                                <table className="table table-bordered mb-0 table-striped table-hover">
                                  <thead>
                                    <tr>
                                      <th>Image</th>
                                      <th>Description</th>
                                      <th>Quantity</th>

                                      <th>Variation</th>
                                    </tr>
                                  </thead>
                                  <tbody className="table-group-divider">
                                    {selectedOrder?.products?.map((product) => (
                                      <tr>
                                        <td>
                                          <img
                                            src={product?.img}
                                            style={{
                                              borderRadius: "50%",
                                              width: "40px",
                                              height: "40px",
                                              objectFit: "cover",
                                            }}
                                            alt=""
                                          />
                                          &nbsp; &nbsp;
                                          {product?.title}
                                        </td>

                                        <td>
                                          {product?.desc?.slice(2, 20) ||
                                            product?.description?.slice(2, 20)}
                                          ...
                                        </td>

                                        <td>{product?.quantity}</td>

                                        <td>
                                          {product?.price?.toFixed(2) ||
                                            product?.selectedVariation?.price?.toFixed(
                                              2
                                            )}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </row>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
