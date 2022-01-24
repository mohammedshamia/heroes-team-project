import { Card, CardImg } from "./index";
import { ContainerButton, ContainerContentCard } from "./style";
import { BookMarkEmpty, BookMarkfill } from "../../Icons/BookMark";
import Rate from "../Rating";
import { useState } from "react";
import Button from "../Buttons";
import Typography from "../../Typography";
import { useTheme } from "styled-components";
import { RootState, useAppDispatch } from "../../../Store/configureStore";
import { useSelector } from "react-redux";
import { addItemToCart } from "../../../Store/Slices/user";
import { IProduct } from "../../../Store/Types";
import AlertMessage from "../Alert";
import { useNavigate } from "react-router";

interface Iprops {
  data: IProduct;
}
export default function MainCard(props: Iprops) {
  const { data } = props;
  const [first, setfirst] = useState(false);

  const [rating, setRating] = useState<number>(3);
  const [state, setState] = useState<boolean>(false);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  let user = useSelector((state: RootState) => state?.entities.user);
  const navigate = useNavigate();
  const handleAddToCart = (id: string) => {
    if (user.auth) {
      dispatch(addItemToCart({ productId: id, qty: 2 }));
      setfirst(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Card>
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
            style={{ cursor: "pointer" }}
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
            {` $ ${data.price}`}
          </Typography>

          <ContainerButton>
            {/* <Button
              padding="5px 12px"
              margin="0 5px"
              onClick={() => setState(!state)}
            >
              {!state && <BookMarkEmpty />}
              {state && <BookMarkfill />}
            </Button> */}
            <Button
              padding="5px 60px"
              onClick={() => handleAddToCart(data._id)}
            >
              {" "}
              Add To Cart{" "}
            </Button>
          </ContainerButton>
        </ContainerContentCard>
      </Card>
      <AlertMessage
        open={first}
        setOpen={setfirst}
        position="snackBar"
        children={"Added to cart"}
        type="success"
      />
    </>
  );
}
