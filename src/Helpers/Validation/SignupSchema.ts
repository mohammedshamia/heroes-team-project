import { object, ref, string, SchemaOf } from "yup";
import { ISignUpUser } from "../../@Types/Validation";
const SignUpSchema = (): SchemaOf<ISignUpUser> => {
  return object().shape({
    firstName: string()
      .required("First name is required")
      .matches(
        /^[A-Za-z ]+$/,
        "Should field with the alphabet with spaces format"
      ),
    lastName: string()
      .required("Last name is required")
      .matches(
        /^[A-Za-z ]+$/,
        "Should field with the alphabet with spaces format"
      ),
    email: string().email("Email is not valid").required("Email is required"),
    password: string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%./^&*()_+<>,~`"':;]{8,}$/,
        `Password should be 8 digits length at least, contains at least one Capital letter, contains at least one number.)`
      ),
    passwordConfirmation: string()
      .required("Password confirmation is required")
      .oneOf([ref("password"), null], "Passwords should matches"),
  });
};

export default SignUpSchema;
