import PropTypes from 'prop-types'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Arrow, CheckoutImage, CheckoutProductName, CheckoutQuantity, CheckoutRemove } from './checkoutItems.styles'

const CheckoutItem = ({ item }) => {
  const {image, name, price, quantity} = item;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  const addItemToCartHandler = () => addItemToCart(item);
  const clearItemFromCartHandler = () => clearItemFromCart(item);
  const removeItemFromCartHandler = () => removeItemFromCart(item);

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