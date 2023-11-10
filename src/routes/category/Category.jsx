import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/CategoriesContext';
import ProductCard from '../../components/product-card/ProductCard';
import { ProductsContainer, Title } from './Category.styles';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [ products, setProducts ] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])
  
  return (
    <>
      <Title>{category}</Title>
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
    </>
  )
}

export default Category;