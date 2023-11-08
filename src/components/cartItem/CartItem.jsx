import PropTypes from 'prop-types'
import { CartItemContainer, CartItemDetails, CartItemImage, CartItemInfo, CartItemName } from './cartItem.styles';

const CartItem = ({cartItem}) => {
  const {name, quantity, price, image} = cartItem;
  return(
    <CartItemContainer>
      <CartItemImage src={image} alt={name} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <CartItemInfo>{quantity} x {price}</CartItemInfo>
      </CartItemDetails>
    </CartItemContainer>
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