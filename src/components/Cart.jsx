import ShoppingIcon from '../assets/shopping-bag.svg'

const Cart = () => {
  return(
    <div className='cart-icon-container'>
      <img className='shopping-icon' src={ShoppingIcon} alt='shopping icon' />
      <span className='item-count'>10</span>
    </div>
  )
}

export default Cart;