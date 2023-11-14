import CategoryCard from "../category-card/CategoryCard";
import { CategoriesContainer } from "./Categories.styles";

const Categories = () => {

  const categories = [
    {
      id: 1,
      title: 'Face',
      imageUrl: 'https://i.pinimg.com/564x/ad/93/c0/ad93c0475ff3821e7fbab032d0081e34.jpg'
    },
    {
      id: 2,
      title: 'Eyes',
      imageUrl: 'https://i.pinimg.com/564x/b7/28/5d/b7285d3cab39ee65fec698a51ee6709c.jpg'
    },
    {
      id: 3,
      title: 'Body',
      imageUrl: 'https://i.pinimg.com/564x/48/b8/7d/48b87d8582bc010ab4ded856f71e7005.jpg'
    },
    {
      id: 4,
      title: 'Hair',
      imageUrl: 'https://i.pinimg.com/564x/d9/46/7e/d9467ef7cb1ee63018ed2e38fb5e5ed0.jpg'
    },
    {
      id: 5,
      title: 'Nails',
      imageUrl: 'https://i.pinimg.com/564x/8a/e4/8d/8ae48db9ba17602afdd3b1f7cbb9a28e.jpg'
    }
  ];

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

export default Categories;