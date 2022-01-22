import { object, ref, string, SchemaOf } from "yup";
import { ISignUpUser } from "../../@Types/Validation";
const SignUpSchema = (): SchemaOf<ISignUpUser> => {
  return object()
    .shape({
      firstName: string().required("Please, First name is required!"),
      lastName: string().required("Please, Last name is required!"),
      email: string()
        .email("Email should be vaild")
        .required("Please, User email is required!"),
      password: string()
        .min(8, "Password should be 8 char or more")
        .required("Please, password is required!"),
      passwordConfirmation: string().oneOf(
        [ref("password"), null],
        "Passwords must match"
      ),
    })
    .required("Please, Passwords must match!");
};

export default SignUpSchema;
