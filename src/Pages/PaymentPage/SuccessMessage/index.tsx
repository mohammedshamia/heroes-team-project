import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import styled from "styled-components";
import AlertMessage from "../../../Components/Elements/Alert/index";
import { RootState } from "../../../Store/configureStore";

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
  const query = new URLSearchParams(useLocation().search);
  const street = query.get("streetAddress");
  const code = query.get("zipCode");

  const items = useSelector(
    (state: RootState) => state?.entities?.user?.data?.cart?.items
  );
  let orders = useSelector((state: RootState) => state.entities.order);
  let shippingAddress = useSelector((state: RootState) => state.entities.order.order?.shippingAddress)

  return (
    <SuccessMessage>
      <AlertMessage
        type="card"
        style={{
          padding: "30px",
          marginBottom: "20px",
        }}
      >
        <Title>Payment Success !</Title>
        <InfoContainer>
          <h2>Order number</h2>
          {orders?.order?.orderItems?.map((item) => (
            <p key={item.product._id}>{item.product}</p>
          ))}
        </InfoContainer>
        <InfoContainer>
          <h2>Shipping Address</h2>
          <p>
            {shippingAddress?.city} {shippingAddress?.country} {street} {code}
          </p>
        </InfoContainer>
        <InfoContainer>
          <h2>Order Items</h2>
          <div>
            {items?.map((item) => (
              <p key={item.product._id}>{item.product.name}</p>
            ))}
          </div>
        </InfoContainer>
        <Hint>
          An email will be sent to your email address containes order
          confirmation and tacking code
        </Hint>
      </AlertMessage>
    </SuccessMessage>
  );
};

export default Index;
