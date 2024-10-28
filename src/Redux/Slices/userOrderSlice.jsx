import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: null,
  loading: false,
  error: "",
};

const userOrderSlice = createSlice({
  name: "userOrder",
  initialState,
  reducers: {
    getOrdersStart: (state) => {
      state.loading = true;
    },
    getOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    getOrdersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const actions = userOrderSlice.actions;

export const { getOrdersStart, getOrdersSuccess, getOrdersFailure } = actions;

export default userOrderSlice.reducer;
