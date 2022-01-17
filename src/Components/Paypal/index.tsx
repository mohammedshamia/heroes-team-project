import React, { FC } from "react";
import { PayPalButton } from "react-paypal-button-v2";

interface IPaypal {}

const Paypal: FC<IPaypal> = ({}) => {
  // const calculateTotal = () => {
  //   let total = 0;

  //   props.users.cart.forEach((item) => {
  //     total += parseInt(item.price, 10);
  //   });
  //   return total;
  // };

  // const generateItems = () => {
  //   let items = props.users.cart.map((item) => ({
  //     unit_amount: {
  //       currency_code: "USD",
  //       value: item.price,
  //     },
  //     quantity: 1,
  //     name: item.model,
  //   }));
  //   return items;
  // };

  // const generateUnits = () => [
  //   {
  //     description: "Guitars and accessories",
  //     amount: {
  //       currency_code: "USD",
  //       value: calculateTotal(),
  //       breakdown: {
  //         item_total: {
  //           currency_code: "USD",
  //           value: calculateTotal(),
  //         },
  //       },
  //     },
  //     items: generateItems(),
  //   },
  // ];

  return (
    <PayPalButton
    // options={{
    //   clientId:
    //     "ATecBr78EUgvSKNO5gnmtpchUICdGjVdhMBugLcAoC34ZYp-6pBJ-z5U13q6lKzOzpvUtjObO44RcwNJ",
    //   currency: "USD",
    //   disableFunding: "credit,card",
    // }}
    // createOrder={(data, actions) => {
    //   return actions.order.create({
    //     purchase_units: generateUnits(),
    //   });
    // }}
    // onSuccess={(details, data) => {
    //   // console.log(details)
    //   // console.log(data)
    //   dispatch(userPurchaseSuccess(details.id));
    //   setLoading(true);
    // }}
    // onCancel={(data) => {
    //   setLoading(false);
    // }}
    />
  );
};

export default Paypal;
