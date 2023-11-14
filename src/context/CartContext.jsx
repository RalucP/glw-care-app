import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer";
import PropTypes from 'prop-types'

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  itemCount: 0,
  cartTotal: 0
}

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  clearItemFromCart: () => null,
  itemCount: 0,
  cartTotal: 0,
});

const CartReducer = (state, action) => {
  const { type, payload } = action;

  switch(type){
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      {
        return {
          ...state,
          ...payload
        }
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      {
        return {
          ...state,
          isCartOpen: payload
        }
      }
    default: 
    {
      throw new Error (`Unhandeled action type: ${type} in CartReducer`)
    }
  }
}

export const CartProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(CartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, itemCount, cartTotal } = state;

  const setIsCartOpen = (bool) => dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));

  const updateCartItemsReducer = (newCartItems) => {
    const newCount = newCartItems.reduce((total, item) => total + item.quantity, 0);
    const newCartTotal = newCartItems.reduce((total, cartItem) => {
      return total + (cartItem.price * cartItem.quantity)
    }, 0);

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
      cartItems: newCartItems,
      itemCount: newCount,
      cartTotal: newCartTotal
    }))
  }
  
  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  }

  const removeItemFromCart = (product) => {
    const newCartItems = removeCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  }

  const clearItemFromCart = (product) => {
    const newCartItems = clearCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  }
  
  const value = { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    addItemToCart, 
    removeItemFromCart, 
    clearItemFromCart,
    itemCount,
    cartTotal
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
