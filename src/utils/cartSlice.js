import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // here reducers function corresponding to each actions
  reducers: {
    //   mutating the state directly here
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //  state.items = []; -- why not to do like this: because it will create a new array, also changing the reference to it and not mutate the original state
      state.items.length = 0;
      // Either mutate the original state or return a new state
      // return {items: []}; // this new object will be replaced inside original state = {items: []}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
// here only one reducer I'm exporting so cartSlice.reducer
