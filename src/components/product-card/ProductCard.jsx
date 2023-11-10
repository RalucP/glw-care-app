import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../context/CartContext';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { 
  ProductCardContainer, 
  ProductImage, 
  ProductInfo, 
  ProductName, 
  ProductPrice } from './ProductCard.styles';

const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };
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