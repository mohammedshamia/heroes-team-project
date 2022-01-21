import {
  Step,
  Hr,
  Stepper,
  WrapperFormAndOrder,
  ContentPlaceOrder,
  ContentDetailsPlaceOrder,
  Title,
  LinkRouter,
  ContainerOrderDetails,
  PositionButton,
} from "./style";
import Button from "../../Components/Elements/Buttons";
import Typography from "../../Components/Typography";
import { ContentCart } from "./OrderDetails";
import ContentOrder from "./ContentOrder";
import { useNavigate } from "react-router";
import Container from "../../Components/Container";

interface Iprop {
  title: string;
  price: number;
  imgUrl: string;
}
const ItemCart: Iprop[] = [
  {
    title: "Canon Eos 80D DSLR Camera",
    price: 565,
    imgUrl: "https://picsum.photos/id/1/200/300",
  },
  {
    title: "Apple Airpods Wireless Bluetooth Headset",
    price: 551,
    imgUrl: "https://picsum.photos/id/0/200/300",
  },
];
const PlaceOrder = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/success");
  };
  return (
    <Container>
      <Typography variant="h6" fontWeight={700}>
        Review Order{" "}
      </Typography>
      <Stepper>
        <>
          {" "}
          <Step
            opacity=".5"
            onClick={() => navigate("/product/review/shipping/:id")}
          >
            {" "}
            1{" "}
          </Step>
          <Typography
            children="shipping and payment"
            fontWeight={700}
            color="#000"
            onClick={() => navigate("/product/review/shipping/:id")}
            style={{
              fontSize: "15px",
              opacity: ".5",
              cursor: "pointer",
              marginRight: "10px",
            }}
          />
        </>
        <Hr />
        <>
          {" "}
          <Step> 2 </Step>
          <Typography
            children=" place and order"
            fontWeight={700}
            color="#000"
            style={{
              fontSize: "15px",
            }}
          />
        </>
      </Stepper>
      <WrapperFormAndOrder Grid="65% 35%">
        <ContentPlaceOrder>
          <Typography
            children="Shipping Address"
            fontWeight={700}
            color="#000"
            style={{
              fontSize: "15px",
            }}
          />
          <Typography
            children="John rose"
            color="#000"
            style={{
              fontSize: "15px",
            }}
          />
          <Typography
            children="56051 Jones Falls, Philippines, Turkey - 62502"
            color="#000"
            style={{
              fontSize: "15px",
            }}
          />
          <Title>
            <Typography
              children="Order Details"
              fontWeight={700}
              color="#000"
              variant="h6"
              style={{
                letterSpacing: "1.28px",
              }}
            />
            <LinkRouter to="/cart"> change </LinkRouter>
          </Title>
          {ItemCart.map((item, index) => (
            <ContentCart
              key={index}
              imgUrl={item.imgUrl}
              price={item.price}
              title={item.title}
            />
          ))}
        </ContentPlaceOrder>
        <ContainerOrderDetails>
          <ContentDetailsPlaceOrder>
            <Typography
              children="Order Details"
              fontWeight={700}
              // color='#000'
              variant="h6"
              style={{
                letterSpacing: "1.28px",
              }}
            />
            <ContentOrder />
          </ContentDetailsPlaceOrder>
          <PositionButton>
            <Button
              type="submit"
              backgroundColor={"#FCDD06"}
              padding={"1rem 3rem"}
              fontSize={"12px"}
              form={"form"}
              margin="3px 0px 0px 70px"
              onClick={handleClick}
            >
              place order
            </Button>
          </PositionButton>
        </ContainerOrderDetails>
      </WrapperFormAndOrder>
    </Container>
  );
};

export default PlaceOrder;
