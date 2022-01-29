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
  Discount,
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
  console.log(user);
  const handleAddToCart = (id: string) => {
    if (user.auth) {
      dispatch(addItemToCart({ productId: id, qty: 1 }));
    } else {
      navigate("/login");
    }
  };

  let data = user.data?.cart?.items.filter((ele: any) => {
    return ele.product._id === productById._id;
  });

  const [color, setColor] = useState("");

  return (
    <ProductDetail>
      <Title>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {" "}
          {productById.name}
        </Typography>
        <div>
          {productById.discount ? (
            <Discount>
              <Typography style={{ fontSize: "15px" }}>
                <del>
                  {" "}
                  ${(productById.price - productById.discount).toFixed(2)}
                </del>
              </Typography>
              <Typography style={{ color: "red", fontSize: "15px" }}>
                {Math.round((100 * productById.discount) / productById.price)}%
                Sale
              </Typography>
            </Discount>
          ) : (
            ""
          )}
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            ${productById.price}
          </Typography>
        </div>
      </Title>
      <Counter
        counter={data && data?.length > 0 ? data[0].qty : 0}
        productId={productById._id}
      />
      {productById?.colors?.length > 0 && (
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
                  border={"1px solid Silver"}
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
