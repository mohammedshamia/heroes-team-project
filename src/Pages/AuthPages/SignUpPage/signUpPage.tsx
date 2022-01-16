import React from "react";
import { SignupContainer, SignupImage } from "./styles";
import SignupForm from "../../../Components/Forms/Signup/index";
import SignupImagee from "../../../Assets/images/SignupImage.png";

const SignUpPage = () => {
  return (
    <SignupContainer>
      <SignupForm />
      <SignupImage src={SignupImagee} alt="SignUp" title="SignUp" />
    </SignupContainer>
  );
};

export default SignUpPage;
