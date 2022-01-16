import React from "react";
import LoginForm from "../../../Components/Forms/LogIn/index";
import { LoginContainer, LoginImage } from "./styles";

import loginImage from '../../../Assets/images/loginImage.png';


const LoginPage = () => {
  return (
    <LoginContainer>
      <LoginForm />
      <LoginImage 
        src={loginImage}
        alt="Login"
        title="Login"
      />
    </LoginContainer>
  );
};

export default LoginPage;
