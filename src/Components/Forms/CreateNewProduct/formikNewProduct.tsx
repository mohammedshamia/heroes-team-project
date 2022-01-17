import { Formik } from "formik";
import React from "react";
import { CreateNewProductSchema } from "../../../Helpers/Validation";
import FormNewProduct from "./formNewProduct";
import { ICreateNewProduct } from "../../../@Types/Validation";
import { CreateNewProductValues } from "./interface";

interface Iprops {
  isEditing: boolean;
}
const FormikNewProduct = (props: Iprops) => {
  const initialValues: CreateNewProductValues = {
    productName: "",
    productBrand: "",
    productCategroy: "",
    productDiscription: "",
    productID: "",
    productCount: "",
    productPrice: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: CreateNewProductValues, actions) => {
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
