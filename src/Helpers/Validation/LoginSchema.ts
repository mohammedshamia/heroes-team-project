import { object, string, SchemaOf, bool } from "yup";
import { ILogInUser } from "../../@Types/Validation";
const LogInSchema = (): SchemaOf<ILogInUser> => {
  return object().shape({
    email: string().email("Email is not valid").required("Email is required"),
    password: string()
      .required("Password is required")
      .min(8, "Password must be more 8 digits.")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%./^&*()_+<>,~`"':;]{8,}$/,
        `Password should be contains at least one Capital letter, contains at least one number.)`
      ),
    isRememberMe: bool(),
  });
};

export default LogInSchema;
