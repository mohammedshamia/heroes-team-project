import { SignupContainer, SignupImage } from "./styles";
import SignupForm from "../../../Components/Forms/Signup";
import Container from "../../../Components/Container";

const SignUpPage = () => {
  return (
    <Container>
      <SignupContainer>
        <SignupForm />
        <SignupImage
          src={"Assets/SignupImage.png"}
          alt="SignUp"
          title="SignUp"
        />
      </SignupContainer>
    </Container>
  );
};

export default SignUpPage;
