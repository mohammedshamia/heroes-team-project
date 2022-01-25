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
  ModalProductName,
} from "./style";
import CloseIcon from "../../Icons/CloseIcon";
import { deleteItemFromCart } from "../../../Store/Slices/user";
import { useAppDispatch } from "../../../Store/configureStore";
import Modal from "../Modal/Dialog/Modal";
import ModalTitle from "../Modal/Dialog/ModalTitle/ModalTitle";
import ModalAction from "../Modal/Dialog/ModalAction/ModalAction";
import Button from "../Buttons";
import { useTheme } from "styled-components";
import { useState } from "react";
import { string } from "yup/lib/locale";

interface IpropsShopCart {
  data: any;
}
const ShoppingCart = ({ data }: IpropsShopCart) => {
  const { items } = data;
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const [modalDisplay, setModalDisplay] = useState<boolean>(false);
  const [proName, setProName] = useState<string>("this product");

  const handleRemove = (id: string) => {
    
  };

  const openModalHandler = (productName: string) => {
    console.log(productName, "product name");
    setProName(productName);
    setModalDisplay(true);
  };
  const closeClickHandler = (id: string) => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <>
      {items.map((elemnt: any) => (
        <ContainerShopping key={elemnt.name + elemnt.product._id}>
          <ContainerClose onClick={() => openModalHandler(elemnt.product.name)}>
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
          {modalDisplay && (
            <Modal isOpen={modalDisplay} onClose={() => setModalDisplay(false)}>
              <ModalTitle>
                <h4>Remove <ModalProductName>{proName}</ModalProductName> from cart?</h4>
              </ModalTitle>
              <ModalAction>
                <Button
                  style={{fontWeight: 'bold'}}
                  onClick={() => closeClickHandler(elemnt)}
                  backgroundColor={theme.colors.error}
                >
                  Remove
                </Button>
                <Button
                  style={{fontWeight: 'bold'}}
                  backgroundColor={theme.colors.primary}
                  onClick={() => {
                    setModalDisplay(false);
                  }}
                >
                  Cancel
                </Button>
              </ModalAction>
            </Modal>
          )}
        </ContainerShopping>
      ))}
    </>
  );
};

export default ShoppingCart;
