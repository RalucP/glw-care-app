import { createAction } from "../../utils/reducer";
import CART_ACTION_TYPES from "./cart.types";

export const setIsCartOpen = (bool) => 
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

export const setCartItems = (items) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, items);

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

export const addItemToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, product) => {
  const newCartItems = removeCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems, product) => {
  const newCartItems = clearCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}