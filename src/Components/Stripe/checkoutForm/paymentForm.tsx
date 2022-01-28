import React, { useState } from "react";

import { Input, InputContainer, StripeElement } from "./style";
import Typography from "../../Typography";

import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const [name, setName] = useState<string>("");

  return (
    <React.Fragment>
      <Typography variant="h6" fontWeight={700} gutterBottom={true}>
        Payment Details
      </Typography>

      <form>
        <InputContainer>
          <div style={{ width: "50%" }}>
            <Typography variant="body1">Name</Typography>
            <Input
              type="string"
              placeholder="Amy Mayer"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div style={{ width: "50%" }}>
            <Typography variant="body1">Card Number</Typography>
            <StripeElement>
              <CardNumberElement />
            </StripeElement>
          </div>
        </InputContainer>

        <InputContainer>
          <div style={{ width: "50%" }}>
            <Typography variant="body1">Expiration Date</Typography>
            <StripeElement>
              <CardExpiryElement />
            </StripeElement>
          </div>

          <div style={{ width: "50%" }}>
            <Typography variant="body1">CVC</Typography>
            <StripeElement>
              <CardCvcElement />
            </StripeElement>
          </div>
        </InputContainer>
      </form>
    </React.Fragment>
  );
};

export default PaymentForm;
