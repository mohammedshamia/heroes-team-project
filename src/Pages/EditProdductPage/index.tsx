import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Container from "../../Components/Container";
import FormikNewProduct from "../../Components/Forms/CreateNewProduct/formikNewProduct";
import Typography from "../../Components/Typography";
import { useAppDispatch, RootState } from "../../Store/configureStore";
import { getProductsById } from "../../Store/Slices/products";

const EditProductPage = () => {
  const dispatch = useAppDispatch();

  let { productById, loading } = useSelector(
    (state: RootState) => state.entities.products
  );

  const { id } = useParams();

  useEffect(() => {
    id && dispatch(getProductsById({ id }));
  }, []);

  return (
    <Container>
      <Typography variant="h6">Edit Product</Typography>

      {productById ? (
        <FormikNewProduct isEditing={true} data={productById} />
      ) : (
        <Typography variant="h1">Not Found Product</Typography>
      )}
    </Container>
  );
};

export default EditProductPage;
