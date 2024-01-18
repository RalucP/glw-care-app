import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selectors';

import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { 
  ProductCardContainer, 
  ProductImage, 
  ProductInfo, 
  ProductName, 
  ProductPrice } from './ProductCard.styles';

const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <ProductImage src={image} alt={name} />
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductInfo>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard;