import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deals: [],
  loading: false,
  error: "",
};

const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    getDealsStart: (state) => {
      state.loading = true;
    },
    getDealsSuccess: (state, action) => {
      state.loading = false;
      state.deals = action.payload;
    },
    getDealsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const actions = dealsSlice.actions;

export const { getDealsStart, getDealsSuccess, getDealsFailure } = actions;

export default dealsSlice.reducer;
