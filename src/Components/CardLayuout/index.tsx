import { useSelector } from "react-redux";
import { RootState } from "../../Store/configureStore";
import MainCard from "../Elements/Card/MainCard";
import { ContainerLyout } from "./style";

export default function CardLayout() {
  // const ItemCard = [
  //   {
  //     title: "Canon Eos 80D DSLR Camera",
  //     price: 56565,
  //     imgUrl: "Assets/img1.PNG",
  //   },
  //   { title: "phone", price: 551, imgUrl: "Assets/img2.PNG" },
  //   { title: "mobile", price: 5454, imgUrl: "Assets/img3.PNG" },
  // ];
  let productById = useSelector(
    (state: RootState) => state?.entities.products.productsByPaginate.products
  );
  return (
    <ContainerLyout>
      {productById.slice(1, 3).map((item, index) => (
        <MainCard
          key={index}
          // title={item.name}
          // price={item.price}
          data={productById}
          // imgUrl={item.imgUrl}
        />
      ))}
    </ContainerLyout>
  );
}
