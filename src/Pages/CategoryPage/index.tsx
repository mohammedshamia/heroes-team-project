import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Container from "../../Components/Container";
import { DividerComponent } from "../../Components/Elements/Devider/styles.styled";
import Typography from "../../Components/Typography";
import { RootState, useAppDispatch } from "../../Store/configureStore";
import { getProductsByCatergories } from "../../Store/Slices/products";
import Categories from "../HomePage/Components/categories";
import CategoriesProducts from "./Components/CategoriesProducts";
import { CategoryContainer } from "./style";

const CategoryPage = () => {
  const { name } = useParams();
  const dispatch = useAppDispatch();

  let { productsByPaginate, loading } = useSelector(
    (state: RootState) => state.entities.products
  );
  useEffect(() => {
    dispatch(getProductsByCatergories({ category: name as string }));
  }, [dispatch, name]);
  return (
    <CategoryContainer>
      <Container>
        <Typography variant="h2">{name}</Typography>
        <DividerComponent />
        {!loading ? (
          <>
            {name ? (
              <CategoriesProducts products={productsByPaginate.products} />
            ) : (
              "no category"
            )}
          </>
        ) : (
          ""
        )}
      </Container>
      <Categories />
    </CategoryContainer>
  );
};

export default CategoryPage;
