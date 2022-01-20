import { Card, CardImg } from "./index";
import { ContainerButton, ContainerContentCard } from "./style";
import { BookMarkEmpty, BookMarkfill } from "../../Icons/BookMark";
import Rate from "../Rating";
import { useState } from "react";
import Button from "../Buttons";
import Typography from "../../Typography";
import { useTheme } from 'styled-components'
interface IpropsMainCard {
  imgUrl?: string;
  title?: string;
  price?: number;
}
export default function MainCard(props: IpropsMainCard) {
  const { imgUrl, title, price } = props;
  const [rating, setRating] = useState<number>(3);
  const [state, setState] = useState<boolean>(false);
  const theme = useTheme()
  return (
    <Card >
     
        <CardImg src={imgUrl} alt="phone" />
      <ContainerContentCard> 
        <Typography className="bla-bla" style = {{fontSize:"1.7rem"}} variant="h5"> {title} </Typography>
        <Rate rating={rating} onRating={(rate: number) => setRating(rate)} />
        <Typography variant="h4" color={theme.background.default} >  {price}  </Typography>
        <ContainerButton>
          <Button
            padding="5px 12px"
            margin="5px"
            onClick={() => setState(!state)}
            height="40%"
          >
            {!state && <BookMarkEmpty />}
            {state && <BookMarkfill />}
          </Button>
          <Button padding="5px 40px"> Add To Cart </Button>
        </ContainerButton>
      </ContainerContentCard>
    </Card>
  );
}
