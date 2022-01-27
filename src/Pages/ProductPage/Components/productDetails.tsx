import { useState } from "react";
import Button from "../../../Components/Elements/Buttons";
import Counter from "../../../Components/Elements/Counter";
import Typography from "../../../Components/Typography";
import { IProduct } from "../../../Store/Types";
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
import { RootState, useAppDispatch } from "../../../Store/configureStore";
import { useSelector } from "react-redux";
interface IProps {
  productById: IProduct;
}

const ProductDetails = ({ productById }: IProps) => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  let user = useSelector((state: RootState) => state?.entities.user);

  const handleAddToCart = (id: string) => {
    if (user.auth) {
      dispatch(addItemToCart({ productId: id, qty: 1 }));
    } else {
      navigate("/login");
    }
  };
  const [color, setColor] = useState("");

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
      <Counter
        counter={productById.countInStock}
        productId={productById._id}
        // setCounter={setCounter}
      />
      {console.log(productById.countInStock)}
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
            {productById.colors.map((ele, index) => (
              <Margin key={index}>
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
            <Button
              fontSize={"14px"}
              padding={"1rem 3rem"}
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
