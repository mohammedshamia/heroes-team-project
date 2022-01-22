import {
  Step,
  Hr,
  Stepper,
  StepDisable,
  WrapOrder,
  WrapperFormAndOrder,
  PositionButton,
} from "./style";
import Typography from "../../Components/Typography";
import ShippingFormik from "../../Components/Forms/ShippingForm/ShippingFormik";
import OrderDetails from "./OrderDetails";
import Button from "../../Components/Elements/Buttons";
import Container from "../../Components/Container";

const ShippingPage = () => {
  return (
    <Container>
      <Typography variant="h6" fontWeight={700}>
        Review Order{" "}
      </Typography>
      <Stepper>
        <>
          {" "}
          <Step> 1 </Step>
          <Typography
            children="shipping and payment"
            fontWeight={700}
            color="#000"
            style={{
              fontSize: "15px",
              cursor: "pointer",
            }}
          />
        </>
        <Hr margin="0px 10px" />
        <>
          {" "}
          <StepDisable> 2 </StepDisable>
          <Typography
            children="  place and order"
            fontWeight={700}
            style={{
              fontSize: "15px",
              color: "#707070",
            }}
          />
        </>
      </Stepper>
      <WrapperFormAndOrder>
        <ShippingFormik />
        <WrapOrder>
          <OrderDetails />
          <PositionButton>
            <Button
              type="submit"
              backgroundColor={"#FCDD06"}
              padding={"1rem 3.5rem"}
              fontSize={"12px"}
              right={"0"}
              bottom={"0"}
              form={"form"}
            >
              Review order
            </Button>
          </PositionButton>
        </WrapOrder>
      </WrapperFormAndOrder>
    </Container>
  );
};

export default ShippingPage;
