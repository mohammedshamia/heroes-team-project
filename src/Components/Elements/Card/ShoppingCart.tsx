import React, { useState } from "react";
import Counter from "../Counter";
import Typography from "../../Typography";
import {
  ContainerShopping,
  ContainerClose,
  ItemImg,
  ItemCounter,
  ItemTypo,
  Itemprice,
} from "./style";
import CloseIcon from "../../Icons/CloseIcon";
import Index from "../../Forms/LogInForm";
import { deleteItemFromCart } from "../../../Store/Slices/user";
import { useAppDispatch } from "../../../Store/configureStore";

interface IpropsShopCart {
  data:
  any
}
const ShoppingCart = ({ data }: IpropsShopCart) => {
  const { items, totalQty, totalPrice } = data;
  console.log(data)
  const dispatch = useAppDispatch();

  const [count, setstateCount] = useState(0);
  const increment = () => {
    setstateCount((prev: number) => prev + 1);
  };
  const handleRemove = (id: string) => {
    dispatch(deleteItemFromCart(id))
    console.log(items)
  }
  //  const theme = useTheme()
  return (
    <>
      {items && items.map((elemnt: any, index: number) => (
        <ContainerShopping key={index}>
          <ContainerClose onClick={() => handleRemove(elemnt.product._id)}>
        <CloseIcon />
      </ContainerClose>

          <ItemImg alignItems="center" justifyContent="center">
            <img src={elemnt.product.images[0]} alt="photo" width={"100%"} loading="lazy" />
          </ItemImg>

          <ItemTypo>
            <Typography variant="body1" children={elemnt.product.name} fontWeight={700} />
          </ItemTypo>
          <ItemCounter>
            <Counter counter={elemnt.qty} setCounter={increment} />
          </ItemCounter>
          <Itemprice>
            <Typography variant="h6" fontWeight={700} children={` $ ${elemnt.itemTotalPrice}`} />
          </Itemprice>
        </ContainerShopping>
      ))}
    </>

  );
};

export default ShoppingCart;


