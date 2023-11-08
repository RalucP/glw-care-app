import PropTypes from 'prop-types'
import ProductCard from './ProductCard';

const CategoriesPreview = ({ title, products }) => {
  return (
    <div className="categories-preview-container">
      <h2>
        <span className='title'>{title.toUpperCase()}</span>
      </h2>
      <div className="categories-preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
      </div>
    </div>
  )
}

CategoriesPreview.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
}

export default CategoriesPreview;
