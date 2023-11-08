import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { CategoryBackgroundImage, CategoryBodyContainer, CategoryCardContainer } from "./categoryCard.styles";

const CategoryCard = ({category: {title, imageUrl}}) => {
  
  const navigate = useNavigate();

  const goToCategory = (title) => {
    navigate(`/shop/${title.toLowerCase()}`);
  }

  return(
    <CategoryCardContainer onClick={() => goToCategory(title)}>
      <CategoryBackgroundImage style={{backgroundImage: `url(${imageUrl})`}}></CategoryBackgroundImage>
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryCardContainer>
  )
}

CategoryCard.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  }).isRequired
}

export default CategoryCard;