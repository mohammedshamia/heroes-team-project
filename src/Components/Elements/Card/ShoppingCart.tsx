import React, { useState } from "react";
import Counter from "../Counter";
import Typography from "../../Typography";
import { ContainerShopping, ContainerClose, ItemImg, ItemCounter, ItemTypo, Itemprice } from "./style";
import CloseIcon from "../../Icons/CloseIcon";

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
//  const theme = useTheme()
  return (
    <ContainerShopping >

      <ContainerClose>
        <CloseIcon />
      </ContainerClose>
      <ItemImg alignItems="center" justifyContent="center">
        <img src={imgUrl} alt="photo" width={"100%"} />
      </ItemImg>

      <ItemTypo>
        <Typography variant="body1" children={title} fontWeight={700} />
      </ItemTypo>
      <ItemCounter>
        <Counter counter={count} setCounter={increment} />
      </ItemCounter>
      <Itemprice>
        <Typography variant="h6" fontWeight={700} children={` $ ${price}`} />
      </Itemprice>
    </ContainerShopping>
  );
};

export default ShoppingCart;
