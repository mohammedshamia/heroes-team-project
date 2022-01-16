import React, { useState } from 'react'
import Counter from '../Counter/counter'
import { CardImg } from "./index";
import Typography from '../../Typography'
import { ContainerShopping, ContainerClose } from './style'
import CloseIcon from '../../Icons/CloseIcon'
interface IpropsShopCart {
  imgUrl?: string;
  title?: string;
  price?: number;
}
const ShoppingCart = (props: IpropsShopCart) => {
  const { imgUrl, title, price } = props;
  const [count, setstateCount] = useState(0);
  const increment = () => {
    setstateCount((prev: number) => prev + 1);
  };
  
  return (
    <ContainerShopping>
      <ContainerClose> 
        <CloseIcon />
      </ContainerClose>
      <CardImg src={imgUrl} alt="photo" width="200px" />
      <Typography variant='h5' children={title} />
      <Counter counter={count} setCounter={increment}  /> 
      <Typography variant='h3' fontWeight={700} children={` $ ${price}` }/>
    </ContainerShopping>
  )
}

export default ShoppingCart
