import { Formik } from "formik";
import { IChangePassword } from "../../../@Types/Validation";
import { ChangePasswordSchema } from "../../../Helpers/Validation/ChangePasswordSchema";
import { useAppDispatch } from "../../../Store/configureStore";
import { updateUserProfile } from "../../../Store/Slices/user";
import { IUserProfile } from "../../../Store/Types";
import ChangePassword from "./ChangePasswordForm";

const Index = ({
  setModalDisplay,
  UserProileData,
}: {
  setModalDisplay: (bool: boolean) => void;
  UserProileData?: IUserProfile;
}) => {
  const initialValues: IChangePassword = {
    password: "",
    newPassword: "",
    newPasswordConfirmation: "",
  };
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        const _UserProileData = {
          firstName: UserProileData?.firstName,
          lastName: UserProileData?.lastName,
          email: UserProileData?.email,
          password: values.newPasswordConfirmation,
          profileImage: UserProileData?.profileImage,
          isAdmin: UserProileData?.isAdmin,
          dateOfBirth: UserProileData?.dateOfBirth,
        };
        dispatch(updateUserProfile(_UserProileData));
      }}
      validationSchema={ChangePasswordSchema}
      children={(formikProps) => (
        <ChangePassword {...formikProps} setModalDisplay={setModalDisplay} />
      )}
    />
  );
};

export default Index;
