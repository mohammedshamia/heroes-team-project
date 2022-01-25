import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Container from "../../Components/Container";
import Alert from "../../Components/Elements/Alert";
import MainCard from "../../Components/Elements/Card/MainCard";
import SppinerLoading from "../../Components/Elements/SppinerLoading";
import Typography from "../../Components/Typography";
import { RootState, useAppDispatch } from "../../Store/configureStore";
import { getAllProductsByPaginate } from "../../Store/Slices/products";
import { CardLayout } from "../CategoryPage/style";
import CardProduct from "../ProductsPage/Components/cardProduct";
import { Divider } from "../ProfilePage/profile.style";

const CategoriesProducts = () => {
  const dispatch = useAppDispatch();

  let { productsByPaginate, loading } = useSelector(
    (state: RootState) => state.entities.products
  );
  const { keyword } = useParams();
  useEffect(() => {
    dispatch(getAllProductsByPaginate({ keyword }));
  }, [dispatch, keyword]);

  return (
    <div>
      <Container>
        <Typography gutterBottom variant="h2">
          Search of {keyword}
        </Typography>
        <Divider />
        <>
          {!loading ? (
            productsByPaginate.products.length > 0 ? (
              <>
                <CardLayout>
                  {productsByPaginate.products.map((item) => {
                    return <MainCard data={item} key={item._id} />;
                  })}
                </CardLayout>
              </>
            ) : (
              <Alert
                type="error"
                style={{
                  marginTop: "40px",
                }}
              >
                <Typography>No products yet!</Typography>
              </Alert>
            )
          ) : ""}
        </>
      </Container>
    </div>
  );

};

export default CategoriesProducts;
