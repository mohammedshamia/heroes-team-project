import React from "react";
import FormikNewProduct from "../../Components/Forms/CreateNewProduct/formikNewProduct";
import Typography from "../../Components/Typography";
import { Container } from "./createProduct.style";

const CreateProductPage = () => {
  return (
    <Container>
      <Typography variant="h6">Create New Product</Typography>
      <FormikNewProduct isEditing={false} />
    </Container>
  );
};

export default CreateProductPage;
