import React from "react";
import Button from "../../Components/Elements/Buttons";
import Typography from "../../Components/Typography";
import { Hr } from "../ReviewPage/style";
import { WrapperSubTotal } from "./style";
interface Iprops {
  data: any;
}
const SubTotal = ({ data }: Iprops) => {
  return (
    <WrapperSubTotal>
      <div style={{ padding: "1rem 3rem" }}>
        <Typography variant="h6" children="Subtotal (3) items" />
        <Typography
          variant="h5"
          style={{ textDecoration: "line-through", color: "#707070" }}
        >
          {" "}
          $989.97{" "}
        </Typography>
        <Typography
          variant="h5"
          fontWeight={700}
          children={data && data.totalPrice}
        />
      </div>
      <Hr width="100%" />
      <div style={{ width: "fit-content" }}>
        <Button
          type="submit"
          backgroundColor={"#FCDD06"}
          children="Proceed To Check out "
          padding={"1rem 2.5rem"}
          fontSize={"12px"}
        ></Button>
      </div>
    </WrapperSubTotal>
  );
};

export default SubTotal;
