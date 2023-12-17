import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';

import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.reducer';

import { Arrow, CheckoutImage, CheckoutProductName, CheckoutQuantity, CheckoutRemove } from './CheckoutItems.styles'

const CheckoutItem = ({ item }) => {
  const {image, name, price, quantity} = item;

  const dispatch = useDispatch();

  const addItemToCartHandler = () => dispatch(addItemToCart(item));
  const clearItemFromCartHandler = () => dispatch(clearItemFromCart(item));
  const removeItemFromCartHandler = () => dispatch(removeItemFromCart(item));

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