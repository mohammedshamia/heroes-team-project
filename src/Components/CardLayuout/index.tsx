import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../Store/configureStore";
import { getProductsByTopThree } from "../../Store/Slices/products";
import MainCard from "../Elements/Card/MainCard";
import SppinerLoading from "../Elements/SppinerLoading";
import { ContainerLyout } from "./style";

export default function CardLayout() {
  const dispatch = useAppDispatch();
  let { productsByTopThree } = useSelector(
    (state: RootState) => state.entities.products
  );
  useEffect(() => {
    dispatch(getProductsByTopThree());
  }, [dispatch]);
  return (
    <ContainerLyout>
      {productsByTopThree.length > 0 ? (
        productsByTopThree.map((item) => (
          <MainCard data={item} key={item._id} />
        ))
      ) : (
        <SppinerLoading />
      )}
    </ContainerLyout>
  );
}
