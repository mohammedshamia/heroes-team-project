import { Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { ISignUpUser } from "../../../@Types/Validation";
import SignupSchema from "../../../Helpers/Validation/SignupSchema";
import Typography from "../../Typography";
import { FormContainer } from "../LogInForm/styles";
// import SignupForm from "./SignupForm";
import SignupForm from "./SignupForm";
import { registerUser } from "../../../Store/Slices/user";
import { RootState, useAppDispatch } from "../../../Store/configureStore";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Signup = () => {
  const theme = useTheme();
  const dispatch= useAppDispatch();
  let user = useSelector((state: RootState) => state.entities.user);
  let navigate= useNavigate();


  const LoginInitialValues: ISignUpUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  };
  useEffect(()=>{
    console.log('user', user)
  })
  return (
    <FormContainer>
      <Typography fontWeight={700} variant="h2">
        Signup.
      </Typography>
      <Typography variant="h6" style={{ marginBottom: "15px" }}>
        Sign up and get exclusive offers form us.
      </Typography>
      <Formik
        initialValues={LoginInitialValues}
        validationSchema={SignupSchema}
        children={SignupForm}
        onSubmit={(values) => {
          console.log("Signup Form Submited :)",values);
          dispatch(registerUser(values))
          user.auth && navigate('');
        }}
      />
      <div style={{ textAlign: "center", marginTop: "25px" }}>
        <NavLink
          style={{
            fontSize: "16px",
            color: theme.textColors.secondary,
            textDecoration: "none",
          }}
          to={"/login"}
        >
          Have an account?{" "}
          <span style={{ textDecoration: "none", fontWeight: "bold" }}>
            Login
          </span>
        </NavLink>
      </div>
    </FormContainer>
  );
};

export default Signup;
