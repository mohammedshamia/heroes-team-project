import { Formik } from "formik";
import { useNavigate } from "react-router";
import { EditUserSchema } from "../../../Helpers/Validation";
import FormEditProduct from "./formEditUser";
import { IEditUserValues } from "./interface";

interface Iprops {
  data?: IEditUserValues;
}
const FormikEditUser = (props: Iprops) => {
  const initialValues: IEditUserValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profileImage: "",
    dateOfBirth: "",
  };
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: IEditUserValues, actions) => {
        console.log(values);
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
