import { Form, FormikProps } from "formik";
import React from "react";
import Button from "../../Elements/Buttons";
import FormInput from "../Fields/inputField";
import { CreateNewProductValues } from "./interface";
import {
  ProductDetails,
  FormProductInputGroup,
  FormProduct,
  ProductImage,
  FlexButon,
  ProductImageUploadGroup,
  ProductImageUpload,
  ProductImageUploadGroupButton,
} from "./newProduct.style";

interface OtherProps {
  isEditing: boolean;
}
const FormNewProduct = (
  props: OtherProps & FormikProps<CreateNewProductValues>
) => {
  const { errors, touched, setFieldValue, isEditing } = props;
  // productImage
  return (
    <Form>
      <FormProduct>
        <ProductImage>
          <ProductImageUpload>
            <Button type="button" height={""} width={""} bold={false}>
              +
            </Button>
          </ProductImageUpload>
          <ProductImageUploadGroup>
            <ProductImageUploadGroupButton>
                +
            </ProductImageUploadGroupButton>
            <ProductImageUploadGroupButton>
                +
            </ProductImageUploadGroupButton>{" "}
            <ProductImageUploadGroupButton>
                +
            </ProductImageUploadGroupButton>
          </ProductImageUploadGroup>
        </ProductImage>
        <ProductDetails>
          <h3>Product Details</h3>
          <FormProductInputGroup>
            <FormInput
              type="input"
              name={"productName"}
              placeholder={"Product Name"}
              touched={touched}
              errors={errors}
              label={"Product Name"}
              fullWidth={false}
              width={"45%"}
            />
            <FormInput
              type="input"
              name={"productBrand"}
              placeholder={"Product Brand"}
              touched={touched}
              errors={errors}
              label={"Product Brand"}
              fullWidth={false}
              width={"45%"}
            />
          </FormProductInputGroup>
          <FormProductInputGroup>
            <FormInput
              type="input"
              name={"productID"}
              placeholder={"Product ID"}
              touched={touched}
              errors={errors}
              label={"Product ID"}
              fullWidth={false}
              width={"45%"}
            />
            <FormInput
              type="input"
              name={"productCategroy"}
              placeholder={"Product Categroy"}
              touched={touched}
              errors={errors}
              label={"Product Categroy"}
              fullWidth={false}
              width={"45%"}
            />
          </FormProductInputGroup>
          <FormProductInputGroup>
            <FormInput
              component="textarea"
              name={"productDiscription"}
              placeholder={"Product Discription"}
              touched={touched}
              errors={errors}
              label={"Product Discription"}
              fullWidth={false}
              width={"100%"}
            />
          </FormProductInputGroup>
          <FormProductInputGroup>
            <FormInput
              type="input"
              name={"productCount"}
              placeholder={"Count In Stock"}
              touched={touched}
              errors={errors}
              label={"Count In Stock"}
              fullWidth={false}
              width={"45%"}
            />
            <FormInput
              type="input"
              name={"productPrice"}
              placeholder={"Product Price"}
              touched={touched}
              errors={errors}
              label={"Product Price"}
              fullWidth={false}
              width={"45%"}
            />
          </FormProductInputGroup>
        </ProductDetails>
      </FormProduct>
      <FlexButon>
        <Button
        type="submit"
          height={"10px"}
          width={"1px"}
          padding={".7rem"}
          bold={false}
          backgroundColor="#4BB543"
          color={"#FFFFFF"}
        >
          {isEditing ? "Update Product" : "+ Create New Product"}
        </Button>
      </FlexButon>
    </Form>
  );
};

export default FormNewProduct;
