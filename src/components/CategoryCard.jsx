import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryCard = ({category: {title, imageUrl}}) => {
  
  const navigate = useNavigate();

  const goToCategory = (title) => {
    navigate(`/shop/${title.toLowerCase()}`);
  }

  return(
    <div onClick={() => goToCategory(title)}  className="category-card-container">
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