import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import { ISignUpUser } from "../../../@Types/Validation";
import SignupSchema from "../../../Helpers/Validation/SignupSchema";
import Typography from "../../Typography";
import { FormContainer } from "../LogInForm/styles";
// import SignupForm from "./SignupForm";
import SignupForm from "./SignupForm";

const Signup = () => {
  const LoginInitialValues: ISignUpUser = {
    userName: "",
    userEmail: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <FormContainer>
      <Typography style={{ fontWeight: "bold" }} variant="h2">
        Signup.
      </Typography>
      <Typography variant="h6" style={{ marginBottom: "15px" }}>
        Sign up and get exclusive offers form us.
      </Typography>
      <Formik
        initialValues={LoginInitialValues}
        validationSchema={SignupSchema}
        onSubmit={() => console.log("Signup Form Submited :)")}
        children={SignupForm}
      />
      <div style={{ textAlign: "center", marginTop: "25px" }}>
        <NavLink
          style={{
            color: " black",
            fontSize: "16px",
          }}
          to={"/login"}
        >
          Have an account?
          <span style={{ textDecoration: "none", fontWeight: "bold" }}>
            Login
          </span>
        </NavLink>
      </div>
    </FormContainer>
  );
};

export default Signup;
