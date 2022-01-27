import { Formik } from "formik";
import { ICreateNewProduct } from "../../../@Types/Validation";
import { CreateNewProductSchema } from "../../../Helpers/Validation";
import { useAppDispatch } from "../../../Store/configureStore";
import { createProdcut, updateProdcut } from "../../../Store/Slices/products";
import { IProduct } from "../../../Store/Types";
import FormNewProduct from "./formNewProduct";

interface Iprops {
  isEditing: boolean;
  data?: IProduct;
}
const FormikNewProduct = (props: Iprops) => {
  const initialValues: ICreateNewProduct = {
    images: [],
    colors: [],
    categories: [],
    price: 0,
    countInStock: 0,
    name: "",
    description: "",
    brand: "",
    discount: 0,
  };

  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: ICreateNewProduct, actions) => {
        if (props.isEditing) {
          console.log(values);
          dispatch(updateProdcut(values as any, props?.data?._id as string));
        } else {
          console.log(values);
          dispatch(createProdcut(values as any));
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
