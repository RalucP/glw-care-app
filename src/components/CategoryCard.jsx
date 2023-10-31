import PropTypes from "prop-types";

const CategoryCard = ({category: {title, imageUrl}}) => {

  return(
    <div  className="category-container">
      <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

CategoryCard.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  }).isRequired
}

export default CategoryCard;