import { object, string, SchemaOf, bool } from "yup";
import { ILogInUser } from "../../@Types/Validation";
const LogInSchema = (): SchemaOf<ILogInUser> => {
  return object().shape({
    email: string()
      .email("Email should be vaild")
      .required("Please, User email is required!"),
    password: string()
      .min(8, "Password should be 8 char or more")
      .required("Please, password is required!"),
      isRememberMe: bool()
  });
};

export default LogInSchema;
