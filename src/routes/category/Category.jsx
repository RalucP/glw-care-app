import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector';

import ProductCard from '../../components/product-card/ProductCard';
import Spinner from '../../components/spinner/Spinner';
import { ProductsContainer, Title } from './Category.styles';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [ products, setProducts ] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])
  
  return (
    <>
      <Title>{category}</Title>
      {
        isLoading ? <Spinner /> : 
          <ProductsContainer>
          {
            products && products.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
              />
            ))
          }
        </ProductsContainer>
      }
    </>
  )
}

export default Category;