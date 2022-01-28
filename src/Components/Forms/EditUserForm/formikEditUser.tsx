import { Formik } from "formik";
import { useNavigate } from "react-router";
import { EditUserSchema } from "../../../Helpers/Validation";
import { useAppDispatch } from "../../../Store/configureStore";
import { editUserDetail } from "../../../Store/Slices/user";
import FormEditProduct from "./formEditUser";
import { IEditUserValues } from "./interface";
interface Iprops {
  data?: IEditUserValues;
  userId: string | undefined;
}
const FormikEditUser = (props: Iprops) => {
  const initialValues: IEditUserValues = {
    firstName: "",
    lastName: "",
    email: "",
    profileImage: "",
    dateOfBirth: "",
    isAdmin: false,
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: IEditUserValues, actions) => {
        dispatch(editUserDetail(values as any, props?.userId as string));
        actions.setSubmitting(false);
        actions.resetForm({});
        navigate("/admin/users");
      }}
      validationSchema={EditUserSchema}
      children={(formikProps) => (
        <FormEditProduct {...formikProps} {...props} />
      )}
    />
  );
};

export default FormikEditUser;
