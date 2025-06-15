import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  reducer: {
    // this reducer is bascically responsible to modify the appStore here. This reducer is combination of different small stores - for each slice we'll have different reducer.
    cart: cartReducer,
  },
});
// if you want to modify store, it also has reducer for itself.And reducers combines -- reducers of their slices.
export default appStore;

//  so app reducer is big reducer which is combination of all the small slice reducers.
