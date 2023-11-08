import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../context/CategoriesContext';
import ProductCard from '../components/productCard/ProductCard';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [ products, setProducts ] = useState(categoriesMap[category]);

  console.log(products)

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])
  
  return (
    <>
      <h1 className='title'>{category}</h1>
      <div className='products-container'>
        {
          products && products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </>
  )
}

export default Category;