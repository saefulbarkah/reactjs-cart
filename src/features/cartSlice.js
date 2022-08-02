import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItem: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQty: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
        toast.info("Quantity product has been added", {
          position: "top-center",
          autoClose: 1000,
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(tempProduct);
        toast.success("Product has been added to cart", {
          position: "top-center",
          autoClose: 1000,
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    removeItem(state, action) {
      const id = action.payload;
      state.cartItem = state.cartItem.filter((arrow) => arrow.id !== id);
      toast.success("Item berhasil di hapus", {
        position: "top-center",
        autoClose: 1000,
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    clearCart(state, action) {
      state.cartItem = [];
      toast.success("Cart has been cleared", {
        position: "top-center",
        autoClose: 1000,
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
  },
});

export const { addToCart, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
