import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { offersReducer } from "./availableOfferSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    offers: offersReducer,
  },
});

export default appStore;
