import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'

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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setItemCount(newCount)
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => {
      return total + (cartItem.price * cartItem.quantity)
    }, 0);
    setCartTotal(newCartTotal)
  }, [cartItems]);
  
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  }

  const removeItemFromCart = (product) => {
    setCartItems(removeCartItem(cartItems, product));
  }

  const clearItemFromCart = (product) => {
    setCartItems(clearCartItem(cartItems, product));
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
