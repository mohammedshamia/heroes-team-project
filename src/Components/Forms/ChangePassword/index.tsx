import { Formik } from "formik";
import { IChangePassword } from "../../../@Types/Validation";
import { ChangePasswordSchema } from "../../../Helpers/Validation/ChangePasswordSchema";
import ChangePassword from "./ChangePasswordForm";

const Index = ( {setModalDisplay}: {setModalDisplay: (bool: boolean)=> void} ) => {
  const initialValues: IChangePassword={
    password: '',
    newPassword: '',
    newPasswordConfirmation: ''
  }
  return(
    <Formik 
      initialValues={initialValues}
      onSubmit={(values)=> console.log('ChangePassword submitted', values)}
      validationSchema={ChangePasswordSchema}
      children={(formikProps) => <ChangePassword {...formikProps} setModalDisplay={setModalDisplay} />}

    />
  )
};

export default Index;
