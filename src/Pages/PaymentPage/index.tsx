import Container from "../../Components/Container";
import TopRate from "../HomePage/Components/topRate";
import SuccessMessage from "./SuccessMessage/index";

const PaymentPage = () => {
  return (
    <div>
      <Container>
        <SuccessMessage />
      </Container>
      <TopRate />
    </div>
  );
};

export default PaymentPage;
