import { Formik } from "formik";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: ICreateNewProduct, actions) => {
        if (props.isEditing) {
          dispatch(updateProdcut(values as any, props?.data?._id as string));
          navigate(`/product/${props?.data?._id}`);
        } else {
          dispatch(createProdcut(values as any));
          navigate("/products");
        }

        actions.setSubmitting(false);
        actions.resetForm({});
        navigate("/admin/products");
      }}
      validationSchema={CreateNewProductSchema}
      children={(formikProps) => <FormNewProduct {...formikProps} {...props} />}
    />
  );
};

export default FormikNewProduct;
