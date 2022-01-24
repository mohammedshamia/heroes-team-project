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
  }
  return (
    <WrapperSubTotal>
      <div style={{ padding: "1rem 4rem" }}>
        <Typography variant="h6" children={`SubTotal (${data.items.length})`} />
        <Typography
          variant="h5"
          style={{ textDecoration: "line-through", color: "#707070" }}
        >

          {/* {} */}
        </Typography>
        <Typography
          variant="h5"
          fontWeight={700}
          children={data && `${data.totalPrice}`}
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
          onClick={() => handlClick()}
        ></Button>
      </div>
    </WrapperSubTotal>
  );
};

export default SubTotal;
