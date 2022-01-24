import { Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { ILogInUser } from "../../../@Types/Validation";
import LogInSchema from "../../../Helpers/Validation/LoginSchema";
import Button from "../../Elements/Buttons";
import Typography from "../../Typography";
import LoginForm from "./LoginForm";
import { FormContainer } from "./styles";
import { loginUser } from "../../../Store/Slices/user";
import { RootState, useAppDispatch } from "../../../Store/configureStore";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Alert from "../../Elements/Alert/index";

const Index = () => {
  const dispatch = useAppDispatch();
  let user = useSelector((state: RootState) => state.entities.user);
  let navigate = useNavigate();

  const LoginInitialValues: ILogInUser = {
    email: "",
    password: "",
    isRememberMe: false,
  };

  useEffect(() => {
    user.auth && navigate("/");
    console.log('user.error', user.error)
  }, [navigate, user]);

  return (
    <FormContainer>
      <Typography fontWeight={700} variant="h2">
        Login.
      </Typography>
      <Typography variant="h6" style={{ marginBottom: "15px" }}>
        Login with your data that you entered during registration
      </Typography>
      {user.error && <Alert type="error">
        <p style={{fontSize: '15px'}}> {user.error} </p>
      </Alert>}
      <Formik
        initialValues={LoginInitialValues}
        validationSchema={LogInSchema}
        children={LoginForm}
        onSubmit={(values) => {
          // console.log("Login Form Submited :)", values);
          dispatch(
            loginUser({
              email: values.email,
              password: values.password,
            })
          );
        }}
      />
      <hr style={{ marginTop: "20px" }} />
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <NavLink
          style={{
            textDecoration: "none",
          }}
          to={"/signup"}
        >
          <Button
            border="1px solid #FCDD06"
            color="black"
            width="60%"
            padding="15px 10px"
          >
            Sign Up Now
          </Button>
        </NavLink>
      </div>
    </FormContainer>
  );
};

export default Index;
