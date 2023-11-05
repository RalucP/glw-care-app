import PropTypes from 'prop-types'

const CartItem = ({cartItem}) => {
  const {name, quantity, price, image} = cartItem;
  return(
    <div className='cart-item-container'>
      <img className='cart-item-image' src={image} alt={name} />
      <div className='cart-item-details'>
        <h3 className='cart-item-name'>{name}</h3>
        <span className='cart-item-info'>{quantity} x {price}</span>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default CartItem;