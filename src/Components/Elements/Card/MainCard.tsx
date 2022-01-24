import { Card, CardImg } from "./index";
import { ContainerButton, ContainerContentCard, DisvountDiv } from "./style";
import Rate from "../Rating";
import { useState } from "react";
import Button from "../Buttons";
import Typography from "../../Typography";
import { useTheme } from "styled-components";
import { RootState, useAppDispatch } from "../../../Store/configureStore";
import { useSelector } from "react-redux";
import { addItemToCart } from "../../../Store/Slices/user";
import { IProduct } from "../../../Store/Types";
import { useNavigate } from "react-router";

interface Iprops {
  data: IProduct;
}
export default function MainCard(props: Iprops) {
  const { data } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rating, setRating] = useState<number>(3);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  let user = useSelector((state: RootState) => state?.entities.user);
  const navigate = useNavigate();
  const handleAddToCart = (id: string) => {
    if (user.auth) {
      dispatch(addItemToCart({ productId: id, qty: 1 }));
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Card>
        {data.discount ? (
          <DisvountDiv>
            <Typography>{data.discount}%</Typography>
          </DisvountDiv>
        ) : (
          ""
        )}
        <CardImg>
          <img
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/product/${data._id}`)}
            src={data.images[0]}
            alt="phone"
            loading="lazy"
          />
        </CardImg>
        <ContainerContentCard>
          <Typography
            className="bla-bla"
            variant="h6"
            style={{ cursor: "pointer", textAlign: "center", height: "6rem" }}
            onClick={() => navigate(`/product/${data._id}`)}
          >
            {data.name}
          </Typography>
          <br />

          <Rate
            rating={data.rating}
            onRating={(rate: number) => setRating(rate)}
          />
          <br />
          <Typography
            variant="h4"
            color={theme.background.default}
            gutterBottom
          >
            {data.discount ? (
              <>
                <span style={{ color: "red" }}>
                  ${data.price - (data.price * data.discount) / 100}
                </span>{" "}
                <del>${data.price}</del>
              </>
            ) : (
              data.price
            )}
          </Typography>

          <ContainerButton>
            <Button
              padding="5px 60px"
              onClick={() => handleAddToCart(data._id)}
            >
              Add To Cart{" "}
            </Button>
          </ContainerButton>
        </ContainerContentCard>
      </Card>
    </>
  );
}
