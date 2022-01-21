import MainCard from "../Elements/Card/MainCard";
import { ContainerLyout } from "./style";

export default function CardLayout() {
  const ItemCard = [
    {
      title: "Canon Eos 80D DSLR Camera",
      price: 56565,
      imgUrl: "Assets/img1.PNG",
    },
    { title: "phone", price: 551, imgUrl: "Assets/img2.PNG" },
    { title: "mobile", price: 5454, imgUrl: "Assets/img3.PNG" },
  ];
  return (
    <ContainerLyout>
      {ItemCard.map((item, index) => (
        <MainCard
          key={index}
          title={item.title}
          price={item.price}
          imgUrl={item.imgUrl}
        />
      ))}
    </ContainerLyout>
  );
}
