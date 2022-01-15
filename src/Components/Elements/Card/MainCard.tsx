import { Card, CardImg} from './index'
import { ContainerButton} from './style'
import { BookMarkEmpty, BookMarkfill} from '../../../Assets/BookMark'
import Rate from '../Rating'
import { useState } from "react";
import Button from '../Buttons'
interface IpropsMainCard {
  imgUrl?: string,
  title?: string,
  price?: number,

}
export default function MainCard(props: IpropsMainCard) {
  const { imgUrl, title, price } = props
  const [rating, setRating] = useState<number>(3);
  const [state, setState] = useState<boolean>(false);
  return (
    <Card width ="30.26%" >
      <CardImg src={imgUrl} alt="phone" />
      <h6> {title} </h6>
      <Rate rating={rating} onRating={(rate: number) => setRating(rate)} />
      <h6> $ {price} </h6>
      <ContainerButton >
        <Button padding="5px 12px" margin="5px" onClick={() => setState(!state)}>
          {!state && <BookMarkEmpty />}
          {state && <BookMarkfill/>}   
        </Button>
        <Button padding="8px 35px"> Add To Cart  </Button>
      </ContainerButton>
    </Card>
  )
}
