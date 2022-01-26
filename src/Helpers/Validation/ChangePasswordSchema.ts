import * as Yup from "yup";
import { IChangePassword } from "../../@Types/Validation";

export const ChangePasswordSchema = (): Yup.SchemaOf<IChangePassword> => {
  return Yup.object().shape({
    password: Yup.string()
      .required("Current Password is required")
      .min(8, "Password must be more 8 digits.")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%./^&*()_+<>,~`"':;]{8,}$/,
        `Password should be contains at least one Capital letter, contains at least one number.)`
      ),
    newPassword: Yup.string()
      .required("New password is required")
      .min(8, "New password must be more 8 digits.")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%./^&*()_+<>,~`"':;]{8,}$/,
        `Password should be contains at least one Capital letter, contains at least one number.)`
      ),

    newPasswordConfirmation: Yup.string()
      .required("New password confirmation is required")
      .oneOf([Yup.ref("newPassword"), null], "New passwords should matches"),
  });
};
