import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "./Slices/categoriesSlice.jsx";
import productsReducer from "./Slices/productsSlice.jsx";
import userReducer from "./Slices/userSlice.jsx";
import cartReducer from "./Slices/cartSlice.jsx";
import mostSellsReducer from "./Slices/mostSellsSlice.jsx";
import userOrderReducer from "./Slices/userOrderSlice.jsx";

const store = configureStore(
  {
    reducer: {
      user: userReducer,
      categories: categoriesReducer,
      products: productsReducer,
      cart: cartReducer,
      mostSelles: mostSellsReducer,
      userOrders : userOrderReducer
    },
  },
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
