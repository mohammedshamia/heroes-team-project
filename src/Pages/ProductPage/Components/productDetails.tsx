import React, { useState } from "react";
import Button from "../../../Components/Elements/Buttons";
import Counter from "../../../Components/Elements/Counter/counter";
import {
  BookMarkEmpty,
  BookMarkfill,
} from "../../../Components/Icons/BookMark";
import Typography from "../../../Components/Typography";
import { IProductData } from "../interface";
import {
  BookMark,
  Color,
  ColorButton,
  ColorText,
  Margin,
  ProductDetail,
  SizeButton,
  Title,
} from "../product.style";
interface IProps {
  ProductData: IProductData[];
}
const ProductDetails = ({ ProductData }: IProps) => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [counter, setCounter] = useState("");
  const [bookMark, setStateBookMark] = useState<boolean>(false);

  return (
    <ProductDetail>
      <Title>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {" "}
          {ProductData[0].name}
        </Typography>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {" "}
          ${ProductData[0].price}
        </Typography>
      </Title>
      <Counter counter={0} setCounter={setCounter} />
      <Color>
        <ColorText>
          <Typography style={{ color: "#adb5bd", fontSize: "18px" }}>
            Color :{" "}
          </Typography>
          <Typography
            style={{
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              alignSelf: "center",
              marginLeft: "7px ",
            }}
          >
            {color}
          </Typography>
        </ColorText>

        <ColorButton>
          {ProductData[0].color.map(({ name }) => (
            <Margin>
              <Button
                borderRaduies={"50%"}
                padding={"2rem"}
                backgroundColor={name}
                borderHover={"1px solid #000"}
                onClick={() => setColor(name)}
              ></Button>
            </Margin>
          ))}
        </ColorButton>
      </Color>
      <Color>
        <ColorText>
          <Typography style={{ color: "#adb5bd", fontSize: "18px" }}>
            {" "}
            Size :{" "}
          </Typography>
          <Typography
            style={{
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              alignSelf: "center",
              marginLeft: "7px ",
            }}
          >
            {size}
          </Typography>
        </ColorText>{" "}
        <SizeButton>
          <div>
            {ProductData[0].size.map(({ name }) => (
              <Button
                borderRaduies={"4px"}
                padding={"0rem 2rem"}
                backgroundColorHover={"#000"}
                colorHover={"#fff"}
                onClick={() => setSize(name)}
                fontSize={"14px"}
                margin={"1rem"}
              >
                {name}
              </Button>
            ))}
          </div>
          <BookMark>
            <Margin>
              <Button
                backgroundColor={"#Fff"}
                padding={".2rem 0.3rem 0.1rem"}
                border={"1px solid #FCDD06"}
                backgroundColorHover={"#ffc107"}
                onClick={() => setStateBookMark(!bookMark)}
              >
                {!bookMark && <BookMarkEmpty />}
                {bookMark && <BookMarkfill />}
              </Button>
            </Margin>
            <Button
              backgroundColor={"#FCDD06"}
              fontSize={"14px"}
              backgroundColorHover={"#ffc107"}
              padding={"0rem 3rem"}
            >
              Add TO Cart
            </Button>
          </BookMark>
        </SizeButton>
      </Color>
      <Typography style={{ fontSize: "12px" }}>
        {" "}
        {ProductData[0].text}
      </Typography>
    </ProductDetail>
  );
};

export default ProductDetails;
