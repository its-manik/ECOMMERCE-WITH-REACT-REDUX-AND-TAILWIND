import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 5,
  cartTotalQuantity: 0,
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.success(`Item Quantity Increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);

        toast.success(`${action.payload.title} added to cart`);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action) => {
      const filteredItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = filteredItems;

      console.log(filteredItems);

      localStorage.setItem("cart", JSON.stringify(state.cartItems));

      toast.success(`${action.payload.title} removed successfully from cart`);
    },
    increaseItemQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      }
      toast.success(`Item QTY increased`);

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    decreaseItemQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
      toast.success(`Item QTY decreased`);

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      if (state.cartItems.length <= 0) {
        toast.success(`Your Cart is already empty`);
      } else {
        toast.success(`Cart Cleared`);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    getTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += cartQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQTY;
    },
  },
});

export const {
  setCloseCart,
  setOpenCart,
  setAddItemCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  getTotals
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;

export const selectCartItems = (state) => state.cart.cartItems;

export const cartTotalAmount = (state) => state.cart.cartTotalAmount;

export const cartTotalQuantity = (state) => state.cart.cartTotalQuantity;

export default CartSlice.reducer;
