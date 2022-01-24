import { useParams } from "react-router";
import Container from "../../Components/Container";
import { DividerComponent } from "../../Components/Elements/Devider/styles.styled";
import Typography from "../../Components/Typography";
import Categories from "../HomePage/Components/categories";
import { Categ } from "../HomePage/style";
import CategoriesProducts from "./Components/CategoriesProducts";
import { CategoryContainer } from "./style";

const CategoryPage = () => {
  const { name } = useParams();
  return (
    <CategoryContainer>
      <Container>
        <Typography variant="h2">{name}</Typography>
      <DividerComponent />
      {name? 
      <CategoriesProducts name={name} />
      :"no category"}
      </Container>
      <Categories />

    </CategoryContainer>
  );
};

export default CategoryPage;
