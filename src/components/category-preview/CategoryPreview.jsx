import PropTypes from 'prop-types'
import ProductCard from '../product-card/ProductCard';
import { CategoriesPreview, CategoryPreviewContainer, Title } from './CategoryPreview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={`${title.toLowerCase()}`}>{title.toUpperCase()}</Title>
      </h2>
      <CategoriesPreview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
      </CategoriesPreview>
    </CategoryPreviewContainer>
  )
}

CategoryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
}

export default CategoryPreview;
