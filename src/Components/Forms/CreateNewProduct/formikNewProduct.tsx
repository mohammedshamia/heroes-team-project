import { Formik } from "formik";
import { CreateNewProductSchema } from "../../../Helpers/Validation";
import { IProduct } from "../../../Store/Types";
import FormNewProduct from "./formNewProduct";
import { CreateNewProductValues } from "./interface";

interface Iprops {
  isEditing: boolean;
  data?: IProduct;
}
const FormikNewProduct = (props: Iprops) => {
  const initialValues: CreateNewProductValues = {
    images: [],
    colors: [],
    categories: [],
    price: "",
    countInStock: "",
    name: "",
    description: "",
    brand: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: CreateNewProductValues, actions) => {
        if (props.isEditing) {
          console.log(values);
        } else {
          console.log(values);
        }

        actions.setSubmitting(false);
        actions.resetForm({});
      }}
      validationSchema={CreateNewProductSchema}
      children={(formikProps) => <FormNewProduct {...formikProps} {...props} />}
    />
  );
};

export default FormikNewProduct;
