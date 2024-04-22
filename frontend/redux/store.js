import { configureStore } from "@reduxjs/toolkit";
import { otherReducer } from "./reducers/otherReducer";
import { productReducer } from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducer";
import { orderReducer } from "./reducers/orderReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    other: otherReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

//https://ecommerce-backend-pkyk.onrender.com/api/v1
// https://bhai-ki-dukan-backned.vercel.app/api/v1

export const server = "https://bhai-ki-dukan-backned.vercel.app/api/v1";
