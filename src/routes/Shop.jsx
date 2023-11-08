import { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import CategoriesPreview from "../components/CategoriesPreview";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title];
          
          return (
            <CategoriesPreview 
              key={title}
              title={title}
              products={products}
            />
          )
        })
      }
    </>
  )
}

export default Shop;