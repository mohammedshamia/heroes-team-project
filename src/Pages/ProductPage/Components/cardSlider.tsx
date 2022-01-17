import React from "react";
import { DividerComponent } from "../../../Components/Elements/Devider/styles.styled";
import { CardSlider } from "../../../Components/Slider/CardSlider";
import Typography from "../../../Components/Typography";
import { Card, Featured } from "../product.style";

const CardSliders = () => {
  return (
    <Card>
      <Featured>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          Featured Products
        </Typography>
      </Featured>
      <DividerComponent/>
      <CardSlider />
    </Card>
  );
};

export default CardSliders;
