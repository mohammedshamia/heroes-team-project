import React from "react";
import CardLayout from "../../../Components/CardLayuout";
import Container from "../../../Components/Container";
import { DividerComponent } from "../../../Components/Elements/Devider/styles.styled";
import Typography from "../../../Components/Typography";
import { IProduct } from "../../../Store/Types";
import { Categ, Category, CategoryImage, CategoryoneImage } from "../style";
import categories from "./categories";

const TopRate = () => {
  return (
    <Container>
      <Categ>
        <Typography variant="h5" fontWeight={700} style={{ marginTop: "50px" }}>
          TOP RATE PRODUCTS{" "}
        </Typography>
      </Categ>
      <DividerComponent />
      <CardLayout />
    </Container>
  );
};

export default TopRate;
