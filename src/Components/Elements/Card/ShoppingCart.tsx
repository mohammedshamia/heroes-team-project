import Counter from "../Counter";
import Typography from "../../Typography";
import {
  ContainerShopping,
  ContainerClose,
  ItemImg,
  ItemCounter,
  ItemTypo,
  Itemprice,
  ContentWrapper,
} from "./style";
import CloseIcon from "../../Icons/CloseIcon";
import { deleteItemFromCart } from "../../../Store/Slices/user";
import { useAppDispatch } from "../../../Store/configureStore";

interface IpropsShopCart {
  data: any;
}
const ShoppingCart = ({ data }: IpropsShopCart) => {
  const { items } = data;
  const dispatch = useAppDispatch();

  const handleRemove = (id: string) => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <>
      {items.map((elemnt: any) => (
        <ContainerShopping key={elemnt.name + elemnt.product._id}>
          <ContainerClose onClick={() => handleRemove(elemnt.product._id)}>
            <CloseIcon />
          </ContainerClose>
          <ItemImg alignItems="center" justifyContent="center">
            <img
              src={`${elemnt?.product?.images[0]}`}
              alt=""
              width={"100%"}
              loading="lazy"
            />
          </ItemImg>
          <ContentWrapper>
            <ItemTypo>
              <Typography
                variant="body1"
                children={elemnt.product.name}
                fontWeight={700}
              />
            </ItemTypo>
            <ItemCounter>
              <Counter
                counter={elemnt.qty}
                productId={elemnt.product._id && elemnt.product._id}
              />
            </ItemCounter>
            <Itemprice>
              <Typography
                variant="body1"
                fontWeight={500}
                children={` $${(elemnt.itemTotalPrice * elemnt.qty).toFixed(
                  2
                )}`}
              />
            </Itemprice>
          </ContentWrapper>
        </ContainerShopping>
      ))}
    </>
  );
};

export default ShoppingCart;
