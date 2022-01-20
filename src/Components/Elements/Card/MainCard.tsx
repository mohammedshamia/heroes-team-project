import { Card, CardImg } from "./index";
import { ContainerButton } from "./style";
import { BookMarkEmpty, BookMarkfill } from "../../Icons/BookMark";
import Rate from "../Rating";
import { useState } from "react";
import Button from "../Buttons";
import Typography from "../../Typography";
interface IpropsMainCard {
  imgUrl?: string;
  title?: string;
  price?: number;
}
export default function MainCard(props: IpropsMainCard) {
  const { imgUrl, title, price } = props;
  const [rating, setRating] = useState<number>(3);
  const [state, setState] = useState<boolean>(false);
  return (
    <Card>
      <CardImg src={imgUrl} alt="phone" />
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          className="bla-bla"
          style={{ fontSize: "1.7rem" }}
          variant="h5"
        >
          {title}
        </Typography>
        <Rate rating={rating} onRating={(rate: number) => setRating(rate)} />
        <Typography variant="h4"> {price} </Typography>
        <ContainerButton>
          <Button
            padding="5px 12px"
            margin="5px"
            onClick={() => setState(!state)}
          >
            {!state && <BookMarkEmpty />}
            {state && <BookMarkfill />}
          </Button>
          <Button padding="8px 40px"> Add To Cart </Button>
        </ContainerButton>
      </div>
    </Card>
  );
}
