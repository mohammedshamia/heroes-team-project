import { object, string, number, SchemaOf, date, bool } from "yup";
import { IEditUser } from "../../@Types/Validation";
const EditUserSchema = (): SchemaOf<IEditUser> => {
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

    profileImage: string(),
    dateOfBirth: date().defined("Date of birth is required"),
    isAdmin: bool(),
  });
};
export default EditUserSchema;
