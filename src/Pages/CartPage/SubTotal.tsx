import React from "react";
import { useNavigate } from "react-router";
import Button from "../../Components/Elements/Buttons";
import Typography from "../../Components/Typography";
import { Hr } from "../ReviewPage/style";
import { WrapperSubTotal } from "./style";
interface Iprops {
  data: any;
}
const SubTotal = ({ data }: Iprops) => {
  const navigate = useNavigate();
  const handlClick = () => {
    navigate("/product/review/shipping/:id");
  };

  const Discount = () => {
    return (
      data.totalPrice -
      data?.items?.reduce(
        (acc: number, { product }: any) => (product.discount as number) + acc,
        0
      )
    );
  };
  const totalPrice = () => {
    return Math.round(data.totalPrice) - 0.01;
  };
  return (
    <WrapperSubTotal>
      <div style={{ padding: "1rem 0", width: "100%" }}>
        <Typography variant="h6" children={`SubTotal (${data.items.length})`} />
        <Typography
          variant="h5"
          style={{ textDecoration: "line-through", color: "#707070" }}
        >
          ${totalPrice()}
        </Typography>
        <Typography
          variant="h5"
          fontWeight={700}
          children={`${
            Discount() < 0 ? 0 : Math.round(Number(Discount())) - 0.01
          }`}
        />
      </div>
      <Hr width="100%" />
      <div style={{ width: "100%" }}>
        <Button
          type="submit"
          backgroundColor={"#FCDD06"}
          children="Proceed to checkout"
          padding={"1rem 2.5rem"}
          fontSize={"12px"}
          onClick={handlClick}
          width="100%"
        ></Button>
      </div>
    </WrapperSubTotal>
  );
};

export default SubTotal;
