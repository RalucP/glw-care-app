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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  itemCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const newCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setItemCount(newCount)
  }, [cartItems]);
  
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  }
  
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, itemCount };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
