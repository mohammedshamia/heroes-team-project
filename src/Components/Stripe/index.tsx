import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./checkoutForm/paymentForm";

import axios from "axios";

const Stripe = () => {
  let [stripePromise, setStripePromise] = useState<any>(null);

  useEffect(() => {
    axios
      .get("https://prohop-express.herokuapp.com/api/config/stripe-key")
      .then((response) => {
        setStripePromise(loadStripe(response.data.publishableKey));
      });
  }, []);

  const renderElement = () => {
    if (stripePromise !== null) {
      return (
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      );
    } else {
      return null;
    }
  };

  return renderElement();
};

export default Stripe;
