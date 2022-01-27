import { useState } from "react";

import { Continer, Input, InputContainer, StripeElement } from "./style";
import Typography from "../../Typography";

import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "18px",
      color: "#424770",
      padding: "8px",
      letterSpacing: "0.025em",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState<any>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)!,
      billing_details: { name },
    });

    if (payload.error) {
      setErrorMessage(payload.error.message);
      setPaymentMethod(null);
    } else {
      setPaymentMethod(payload.paymentMethod);
      setErrorMessage(null);
    }
  };

  return (
    <Continer>
      <Typography variant="h6" fontWeight={700}>
        Payment Details
      </Typography>

      <form onSubmit={handleSubmit}>
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
              <CardNumberElement options={ELEMENT_OPTIONS} />
            </StripeElement>
          </div>
        </InputContainer>

        <InputContainer>
          <div style={{ width: "50%" }}>
            <Typography variant="body1">Expiration Date</Typography>
            <StripeElement>
              <CardExpiryElement options={ELEMENT_OPTIONS} />
            </StripeElement>
          </div>

          <div style={{ width: "50%" }}>
            <Typography variant="body1">CVC</Typography>
            <StripeElement>
              <CardCvcElement options={ELEMENT_OPTIONS} />
            </StripeElement>
          </div>
        </InputContainer>
      </form>
    </Continer>
  );
};

export default PaymentForm;
