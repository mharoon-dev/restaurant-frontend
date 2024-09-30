import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsStart: (state) => {
      state.loading = true;
    },
    productsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    productsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const actions = productsSlice.actions;

export const { productsStart, productsSuccess, productsFailure } =
  actions;

export default productsSlice.reducer;
