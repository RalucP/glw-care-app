import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="categories-preview-container">
      <h2>
        <Link to={`${title.toLowerCase()}`} className='title'>{title.toUpperCase()}</Link>
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

CategoryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
}

export default CategoryPreview;
