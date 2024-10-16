import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  loading: false,
  error: "",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategoriesStart: (state) => {
      state.loading = true;
    },
    getCategoriesSuccess: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    getCategoriesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const actions = categoriesSlice.actions;

export const {  getCategoriesStart, getCategoriesSuccess, getCategoriesFailure } =
  actions;

export default categoriesSlice.reducer;
