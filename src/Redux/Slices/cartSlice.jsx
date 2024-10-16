import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    loading: false,
    error: "",
};

const cartSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        getCartStart: (state) => {
            state.loading = true;
        },
        getCartSuccess: (state, action) => {
            state.loading = false;
            state.cart = action.payload;
        },
        getCartFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // add 

        addCartStart: (state) => {
            state.loading = true;
        },
        addCartSuccess: (state, action) => {
            state.loading = false;
            //add the cart
            state.cart.push(action.payload);
        },
        addCartFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // delete 

        deleteCartStart: (state) => {
            state.loading = true;
        },
        deleteCartSuccess: (state, action) => {
            state.loading = false;
            // delete the cart
            state.cart = state.cart.filter((item) => item._id !== action.payload);
        },
        deleteCartFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // update
        updateCartStart: (state) => {
            state.loading = true;
        },
        updateCartSuccess: (state, action) => {
            state.loading = false;
            // update the cart
            state.cart = state.cart.map((item) =>
                item._id === action.payload._id ? action.payload : item
            );
        },
        updateCartFailure: (state, action) => {
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

const actions = cartSlice.actions;

export const { getCartStart, getCartSuccess, getCartFailure, addCartStart, addCartSuccess, addCartFailure, deleteCartStart, deleteCartSuccess, deleteCartFailure, updateCartStart, updateCartSuccess, updateCartFailure,reset } =
    actions;

export default cartSlice.reducer;
