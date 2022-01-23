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
import { addItemToCart, deleteItemFromCart } from "../../../Store/Slices/user";
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
  const handleIncrease = (id: string, qty: number) => {
    dispatch(addItemToCart({ productId: id, qty: qty }))
    console.log("add")
  }
  //  const theme = useTheme()
  return (
    <>
      {items.map((elemnt: any) => (
        <ContainerShopping key={elemnt.product._id}>
          <ContainerClose onClick={() => handleRemove(elemnt.product._id)}>
            <CloseIcon />
          </ContainerClose>

          <ItemImg alignItems="center" justifyContent="center">
            <img src={elemnt.product.images[0]} alt="blabla" width={"100%"} loading="lazy" />
          </ItemImg>

          <ItemTypo>
            <Typography variant="body1" children={elemnt.product.name} fontWeight={700} />
          </ItemTypo>
          <ItemCounter>
            <Counter counter={elemnt.qty}
            //  handleIncrease(elemnt.product._id, elemnt.qty)} 
            />
          </ItemCounter>
          <Itemprice>
            <Typography variant="h6" fontWeight={700} children={` $ ${elemnt.itemTotalPrice * elemnt.qty}`} />
          </Itemprice>
        </ContainerShopping>
      ))
      }

    </>

  );
};

export default ShoppingCart;


