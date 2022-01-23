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

interface IpropsMainCard {
  imgUrl?: string;
  title?: string;
  price?: number;
  data?: any;
}
export default function MainCard(props: IpropsMainCard[]) {
  // const { imgUrl, title, price } = props;
  const [rating, setRating] = useState<number>(3);
  const [state, setState] = useState<boolean>(false);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { data } = props;
  console.log(data)
  const handleAddToCart = (id: string) => {

    dispatch(addItemToCart({ "productId": id, "qty": 0 }))
    console.log(data.length)
  }
  return (
    <>
      {data?.slice(-3, -2).map((item: any) => (
        <Card key={item._id}>
          <CardImg>
            <img src={item.images[0]} alt="phone" loading="lazy" />
          </CardImg>
          <ContainerContentCard>
            <Typography
              // gutterBottom

              className="bla-bla"
              variant="h6"

            >
              {item.name}

            </Typography>
            <br />
            <Rate rating={rating} onRating={(rate: number) => setRating(rate)} />
            <br />
            <Typography variant="h4" color={theme.background.default} gutterBottom>
              {` $ ${item.price}`}

            </Typography>

            <ContainerButton>
              <Button
                padding="5px 12px"
                margin="0 5px"
                onClick={() => setState(!state)}
              >
                {!state && <BookMarkEmpty />}
                {state && <BookMarkfill />}
              </Button>
              <Button padding="5px 60px" onClick={() => handleAddToCart(item._id)}> Add To Cart </Button>
            </ContainerButton>
          </ContainerContentCard>
        </Card>
      ))};
    </>

  )
}
