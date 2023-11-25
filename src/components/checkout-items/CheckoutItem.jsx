import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selectors';

import { Arrow, CheckoutImage, CheckoutProductName, CheckoutQuantity, CheckoutRemove } from './CheckoutItems.styles'

const CheckoutItem = ({ item }) => {
  const {image, name, price, quantity} = item;

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, item));
  const clearItemFromCartHandler = () => dispatch(clearItemFromCart(cartItems, item));
  const removeItemFromCartHandler = () => dispatch(removeItemFromCart(cartItems, item));

  return(
    <tr>
      <td>
        <CheckoutImage src={image} alt="item image" />
      </td>
      <CheckoutProductName>{name}</CheckoutProductName>
      <td>
        <CheckoutQuantity>
          <Arrow onClick={removeItemFromCartHandler}>&#10094;</Arrow>
          <span>{quantity}</span>
          <Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>
        </CheckoutQuantity>
      </td>
      <td>{price}</td>
      <CheckoutRemove onClick={clearItemFromCartHandler}>&#10005;</CheckoutRemove>
    </tr>
  )
}

CheckoutItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CheckoutItem;