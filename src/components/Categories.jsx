import CategoryCard from "./CategoryCard";
import PropTypes from 'prop-types';

const Categories = ({categories}) => {

  return (
    <div className="categories-container">
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
    </div>
  )
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired
}

export default Categories;