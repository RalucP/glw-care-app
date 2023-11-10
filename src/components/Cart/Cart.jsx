import { useContext } from 'react'
import ShoppingSvg from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/CartContext'
import { CartIconContainer, ItemCount, ShoppingIcon } from './Cart.styles';

const Cart = () => {
  const { isCartOpen, itemCount, setIsCartOpen } = useContext(CartContext);

  

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }

  return(
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon src={ShoppingSvg} alt='shopping icon' />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  )
}

export default Cart;