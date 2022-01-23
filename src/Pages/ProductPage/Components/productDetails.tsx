import React, { useState } from "react";
import Button from "../../../Components/Elements/Buttons";
import Counter from "../../../Components/Elements/Counter";
import {
  BookMarkEmpty,
  BookMarkfill,
} from "../../../Components/Icons/BookMark";
import Typography from "../../../Components/Typography";
import { IProduct } from "../../../Store/Types";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

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
import { addItemToCart } from "../../../Store/Slices/user";
import { useAppDispatch } from "../../../Store/configureStore";
interface IProps {
  productById: IProduct;
}

const ProductDetails = ({ productById }: IProps) => {
  const { id } = useParams();
  const [counter, setCounter] = useState(0);
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleAddToCart = (id: string) => {
    dispatch(addItemToCart({ productId: id, qty: counter }))
    navigate("/cart");
  };
  const [color, setColor] = useState("");
  const [bookMark, setStateBookMark] = useState<boolean>(false);

  return (
    <ProductDetail>
      <Title>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {" "}
          {productById.name}
        </Typography>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          ${productById.price}
        </Typography>
      </Title>
      <Counter counter={productById.countInStock} setCounter={setCounter} />
      {productById.colors.length > 0 && (
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
            {productById.colors.map((ele) => (
              <Margin>
                <Button
                  borderRaduies={"50%"}
                  padding={"2rem"}
                  backgroundColor={ele}
                  borderHover={"1px solid #000"}
                  onClick={() => setColor(ele)}
                ></Button>
              </Margin>
            ))}
          </ColorButton>
        </Color>
      )}
      <Color>
        <SizeButton>
          <div></div>
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
              fontSize={"14px"}
              padding={"0rem 3rem"}
              onClick={() => handleAddToCart(productById._id)}
            >
              Add TO Cart
            </Button>
          </BookMark>
        </SizeButton>
      </Color>
      <Typography style={{ fontSize: "12px" }}>
        {" "}
        {productById.description}
      </Typography>
    </ProductDetail>
  );
};

export default ProductDetails;
