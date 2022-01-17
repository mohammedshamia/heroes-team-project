
import { Step, Hr, Stepper, StepDisable, WrapOrder, WrapperFormAndOrder } from './style'
import Typography from "../../Components/Typography";
import ShippingFormik from "../../Components/Forms/ShippingForm/ShippingFormik";
import OrderDetails from './OrderDetails';
// import Container from '../../Components/Container';

const ShippingPage = () => {
  return (
    <>
      <Typography variant='h6' fontWeight={700} >Review Order </Typography>
      <Stepper>
        <> <Step> 1 </Step>
          <Typography
            children=' shipping and payment'
            fontWeight={700}
            color='#000'
            style={{
              fontSize: "15px",
            }}
          />
        </>
        <Hr />
        <> <StepDisable> 2 </StepDisable>

          <Typography
            children='  place and order'
            fontWeight={700}
            style={{
              fontSize: "15px",
              color: '#707070'
            }}
          />
        </>
      </Stepper>
      <WrapperFormAndOrder >
        <ShippingFormik />
        <WrapOrder >
          <OrderDetails />
        </WrapOrder>     
      </WrapperFormAndOrder>
    </>

  );
};

export default ShippingPage;
