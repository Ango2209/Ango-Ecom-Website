import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/users/userSlice";
import productReducer from "../features/products/productSlice";
import blogReducer from "../features/blogs/blogSlice";
import contactReducer from "../features/contact/contactSlice";
import orderReducer from "../features/orders/orderSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    blogs: blogReducer,
    contacts: contactReducer,
    orders: orderReducer,
  },
});
