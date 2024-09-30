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
    categoriesStart: (state) => {
      state.loading = true;
    },
    categoriesSuccess: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    categoriesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const actions = categoriesSlice.actions;

export const { categoriesStart, categoriesSuccess, categoriesFailure } =
  actions;

export default categoriesSlice.reducer;
