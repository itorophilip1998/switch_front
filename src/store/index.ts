// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productSlice";
import categoryReducer from "./categories/categorySlice";
import cartReducer from "./products/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
