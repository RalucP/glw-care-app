import { useContext } from 'react'
import ShoppingIcon from '../assets/shopping-bag.svg'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }

  return(
    <div onClick={toggleIsCartOpen} className='cart-icon-container'>
      <img className='shopping-icon' src={ShoppingIcon} alt='shopping icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default Cart;