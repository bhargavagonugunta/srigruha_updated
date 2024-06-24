import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    AddCart(state, action) {
      const itemIndex = state.items.findIndex(
        (indexitem) => indexitem.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalAmount: action.payload.price,
        });
      } else {
        const selectedItem = state.items[itemIndex];
        selectedItem.quantity++; // increase   quantity
        state.items[itemIndex].totalAmount += action.payload.price;
      }
    },
    RemoveItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    IncreaseQuantity(state, action) {
      const itemIndex = state.items.findIndex(
        (indexitem) => indexitem.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity++; // click + button increase quantity
        state.items[itemIndex].totalAmount += action.payload.price;
      }
    },
    DecreaseQuantity(state, action) {
      const itemIndex = state.items.findIndex(
        (indexitem) => indexitem.id === action.payload.id
      );
      if (itemIndex !== -1 && state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity--; // Decrease quantity if quantity > 1
        state.items[itemIndex].totalAmount -= action.payload.price;
      } else {
        // if quantity comes 0 cart will atomatically deleted
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
      state.totalAmount -= action.payload.price;
    },
  },
});

export const { AddCart, RemoveItem, IncreaseQuantity, DecreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
