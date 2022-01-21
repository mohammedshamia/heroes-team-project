import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import { ILogInUser } from "../../../@Types/Validation";
import LogInSchema from "../../../Helpers/Validation/LoginSchema";
import Button from "../../Elements/Buttons";
import Typography from "../../Typography";
import LoginForm from "./LoginForm";
import { FormContainer } from "./styles";

const Index = () => {
  const LoginInitialValues: ILogInUser = {
    userEmail: "",
    password: "",
    isRememberMe: false,
  };
  return (
    <FormContainer>
      <Typography fontWeight={700} variant="h2">
        Login.
      </Typography>
      <Typography variant="h6" style={{ marginBottom: "15px" }}>
        Login with your data that you entered during registration
      </Typography>
      <Formik
        initialValues={LoginInitialValues}
        validationSchema={LogInSchema}
        onSubmit={() => console.log("Login Form Submited :)")}
        children={LoginForm}
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
