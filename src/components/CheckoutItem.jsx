import PropTypes from 'prop-types'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutItem = ({ item }) => {
  const {image, name, price, quantity} = item;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  const addItemToCartHandler = () => addItemToCart(item);
  const clearItemFromCartHandler = () => clearItemFromCart(item);
  const removeItemFromCartHandler = () => removeItemFromCart(item);

  return(
    <tr>
      <td>
        <img className="checkout-image" src={image} alt="item image" />
      </td>
      <td className="checkout-product-name">{name}</td>
      <td>
        <div className="checkout-quantity">
          <div className='arrow' onClick={removeItemFromCartHandler}>&#10094;</div>
          <span>{quantity}</span>
          <div className='arrow' onClick={addItemToCartHandler}>&#10095;</div>
        </div>
      </td>
      <td>{price}</td>
      <td className="checkout-remove" onClick={clearItemFromCartHandler}>&#10005;</td>
    </tr>
  )
}

CheckoutItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CheckoutItem;