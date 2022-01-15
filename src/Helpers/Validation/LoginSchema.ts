import { object, string, SchemaOf } from "yup";
import { ILogInUser } from "../../@Types/Validation";
const LogInSchema = (): SchemaOf<ILogInUser> => {
  return object().shape({
    userEmail: string()
      .email("Email should be vaild")
      .required("Please, User email is required!"),
    password: string()
      .min(8, "Password should be 8 char or more")
      .required("Please, password is required!"),
  });
};

export default LogInSchema;
