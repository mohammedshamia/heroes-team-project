import Container from "../../../Components/Container";
import LoginForm from "../../../Components/Forms/LogIn/index";
import { LoginContainer, LoginImage } from "./styles";

const LoginPage = () => {
  return (
    <Container>
      <LoginContainer>
        <LoginForm />
        <LoginImage src="Assets/LoginImage.png" alt="Login" title="Login" />
      </LoginContainer>
    </Container>
  );
};

export default LoginPage;
