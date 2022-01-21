import React from "react";

import { CardSlider } from "../../../Components/CardSlider";
import Container from "../../../Components/Container";
import { DividerComponent } from "../../../Components/Elements/Devider/styles.styled";
import Typography from "../../../Components/Typography";
import {
  Categ,
  Category,
  CategoryImage,
  CategoryoneImage,
  Image,
} from "../style";

const Categories = () => {
  const categories = [
    {
      image: "Assets/img1.PNG",
      name: "ACCESSORIES",
    },
    {
      image: "Assets/img2.PNG",
      name: "DEVICES",
    },
    {
      image: "Assets/img3.PNG",
      name: "COMPUTER COMPONENTS",
    },
    {
      image: "Assets/img4.PNG",
      name: "LAPTOP",
    },
  ];
  return (
    <Container>
      <Categ>
        <Typography
          variant="h5"
          fontWeight={700}
          style={{ textTransform: "uppercase" }}
        >
          Featured Categories
        </Typography>
      </Categ>
      <DividerComponent />
      <Category>
        {categories.map((element) => (
          <CategoryImage>
            <CategoryoneImage>
              <Image src={element.image} />
            </CategoryoneImage>

            <Typography
              variant="body1"
              style={{ padding: "1rem" }}
              fontWeight={700}
            >
              {element.name}
            </Typography>
          </CategoryImage>
        ))}
      </Category>
    </Container>
  );
};

export default Categories;
