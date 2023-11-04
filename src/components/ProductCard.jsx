import PropTypes from 'prop-types'
import Button from './Button';

const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  return (
    <div className="product-card-container">
      <img className="product-image" src={image} alt={name} />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
      </div>
      <Button buttonType='inverted'>Add to cart</Button>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard;