import { object, ref, string, SchemaOf } from "yup";
import { ISignUpUser } from "../../@Types/Validation";
const SignUpSchema = (): SchemaOf<ISignUpUser> => {
  return object().shape({
    userName: string().required("Please, User name is required!"),
    userEmail: string()
      .email("Email should be vaild")
      .required("Please, User email is required!"),
    password: string()
      .min(8, "Password should be 8 char or more")
      .required("Please, password is required!"),
    confirmPassword: string().oneOf(
      [ref("password"), null],
      "Passwords must match"
    ),
  }).required('Please, Passwords must match!');
};

export default SignUpSchema;
