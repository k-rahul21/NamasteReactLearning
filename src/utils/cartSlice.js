import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      // mutating the state here means we're directly updating the store here
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      console.log("state", state);
      console.log(current(state));
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
