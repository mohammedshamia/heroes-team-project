import styled from "styled-components";
import Alert from "../../../Components/Elements/Alert/index";

const SuccessMessage = styled.div`
  padding: 40px 0;
`;

const Hint = styled.p`
  width: 30%;
  font-weight: bold;
  font-size: 13px;
  color: #3a3939;
`;
const Title = styled.h1`
  margin-bottom: 25px;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 18px 0;
  h2 {
    width: 30%;
  }
`;

const Index = () => {
  return (
    <SuccessMessage>
      <Alert
        type="card"
        style={{
          padding: "30px",
          marginBottom: "20px",
        }}
      >
        <Title>Payment Success !</Title>
        <InfoContainer>
          <h2>Order number</h2>
          <p>17D458E7e6155r7</p>
        </InfoContainer>
        <InfoContainer>
          <h2>Shipping Address</h2>
          <p>57415 Al-Naser Gaza Palestine- 9919</p>
        </InfoContainer>
        <InfoContainer>
          <h2>Order Items</h2>
          <p>1x iPhone 11 pro 256GB Memory 1x Apple</p>
        </InfoContainer>
        <Hint>
          An email will be sent to your email address containes order
          confirmation and tacking code
        </Hint>
      </Alert>
    </SuccessMessage>
  );
};

export default Index;
