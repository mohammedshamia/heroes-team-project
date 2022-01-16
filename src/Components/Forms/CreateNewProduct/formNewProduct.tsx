import { Form, FormikProps } from "formik";
import React from "react";
import Button from "../../Elements/Buttons";
import Typography from "../../Typography";
import FormInput from "../Fields/inputField";
import { ICreateNewProduct } from "../../../@Types/Validation";
import {
  ProductDetails,
  FormProductInputGroup,
  FormProduct,
  ProductImage,
  FlexButon,
  ProductImageUploadGroup,
  ProductImageUpload,
  ProductImageUploadGroupButton,
  Continer,
} from "./newProduct.style";

interface OtherProps {
  isEditing: boolean;
}
const FormNewProduct = (
  props: OtherProps & FormikProps<ICreateNewProduct>
) => {
  const { errors, touched, setFieldValue, isEditing } = props;
  // productImage
  return (
    <Continer>
      <FormProduct>
        <ProductImage>
          <ProductImageUpload>
            <Button type="button" height={""} width={""} bold={false}>
              Product Images (4 images allowed){" "}
            </Button>
          </ProductImageUpload>
          <ProductImageUploadGroup>
            <ProductImageUploadGroupButton>
              <Button
                type="button"
                height={""}
                width={""}
                bold={false}
                padding={"1rem"}
              >
                +
              </Button>{" "}
            </ProductImageUploadGroupButton>
            <ProductImageUploadGroupButton>
              <Button
                type="button"
                height={""}
                width={""}
                bold={false}
                padding={"1rem"}
              >
                +
              </Button>{" "}
            </ProductImageUploadGroupButton>{" "}
            <ProductImageUploadGroupButton>
              <Button
                type="button"
                height={""}
                width={""}
                bold={false}
                padding={"1rem"}
              >
                +
              </Button>{" "}
            </ProductImageUploadGroupButton>
          </ProductImageUploadGroup>
        </ProductImage>
        <ProductDetails>
          <Typography variant="h6">Product Details</Typography>
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
              background={"#F2F2F2"}
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
              background={"#F2F2F2"}
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
              background={"#F2F2F2"}
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
              background={"#F2F2F2"}
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
              background={"#F2F2F2"}
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
              background={"#F2F2F2"}
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
              background={"#F2F2F2"}
            />
          </FormProductInputGroup>
        </ProductDetails>
      </FormProduct>
      <FlexButon>
        <Button
          type="submit"
          padding={"1rem 3rem"}
          bold={false}
          backgroundColor="#4BB543"
          color={"#FFFFFF"}
          fontSize={"14px"}
          borderRaduies={"4px"}
        >
          {isEditing ? "Update Product" : " Create New Product"}
        </Button>
      </FlexButon>
    </Continer>
  );
};

export default FormNewProduct;
