import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mostSellsProducts: [],
  loading: false,
  error: "",
};

const mostSellsSlice = createSlice({
  name: "mostSells",
  initialState,
  reducers: {
    getMostSellsStart: (state) => {
      state.loading = true;
    },
    getMostSellsSuccess: (state, action) => {
      state.loading = false;
      state.mostSellsProducts = action.payload;
    },
    getMostSellsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    reset: (state) => {
      state.loading = false;
      state.error = "";
      state.cart = [];
    },
  },
});

const actions = mostSellsSlice.actions;

export const {
  getMostSellsStart,
  getMostSellsSuccess,
  getMostSellsFailure,
  reset,
} = actions;

export default mostSellsSlice.reducer;
