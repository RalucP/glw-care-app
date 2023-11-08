import CategoryCard from "../categoryCard/CategoryCard";
import PropTypes from 'prop-types';
import { CategoriesContainer } from "./categories.styles";

const Categories = ({categories}) => {

  return (
    <CategoriesContainer>
      {
        categories.map((category) => {
          const {id} = category;
          return (
            <CategoryCard 
              key={id} 
              category={category} 
            />
          )
        })
      }
    </CategoriesContainer>
  )
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired
}

export default Categories;