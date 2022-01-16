import { Formik } from "formik";
import React from "react";
import { CreateNewProductSchema } from "../../../Helpers/Validation";
import FormNewProduct from "./formNewProduct";
import { ICreateNewProduct } from "../../../@Types/Validation";

interface Iprops {
  isEditing: boolean;
}
const FormikNewProduct = (props: Iprops) => {
  const initialValues: ICreateNewProduct = {
    productName: "",
    productBrand: "",
    productCategroy: "",
    productDiscription: "",
    productID: 0,
    productCount: 0,
    productPrice: 0,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: ICreateNewProduct, actions) => {
        console.log(values);
        actions.setSubmitting(false);
        actions.resetForm({});
      }}
      validationSchema={CreateNewProductSchema}
      children={(formikProps) => <FormNewProduct {...formikProps} {...props} />}
    />
  );
};

export default FormikNewProduct;
