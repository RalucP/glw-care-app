import { createSlice } from "@reduxjs/toolkit";

const addCartItem = (cartItems, product) => {
  const found = cartItems.find(item => item.id === product.id);

  if (found) {
    return cartItems.map(item => item.id === product.id
      ? { ...item, quantity: item.quantity + 1 } : item
    )
  }

  return [...cartItems, { ...product, quantity: 1 }];
}

const removeCartItem = (cartItems, product) => {
  const existingItem = cartItems.find(item => item.id === product.id);

  if(!existingItem) return;

  if(existingItem.quantity === 1){
    return cartItems.filter(item => item.id !== product.id)
  }

  return cartItems.map(item => item.id === product.id
    ? { ...item, quantity: item.quantity - 1 } : item
  )
}

const clearCartItem = (cartItems, product) => {
  return cartItems.filter(item => item.id !== product.id)
}

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  itemCount: 0,
  cartTotal: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },

    removeItemFromCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },

    clearItemFromCart(state, action) {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },

    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    }
  }
});

export const { addItemToCart, removeItemFromCart, clearItemFromCart, setIsCartOpen } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;