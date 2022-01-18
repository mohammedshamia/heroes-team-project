import React from "react";
import ShoppingCart from "../../Components/Elements/Card/ShoppingCart";
const ItemCart = [
  {
    title: "Canon Eos 80D DSLR Camera",
    price: 565,
    imgUrl: "https://picsum.photos/id/1/200/300",
  },
  { title: "phone", price: 551, imgUrl: "https://picsum.photos/id/10/200/300" },
  { title: "mobile", price: 544, imgUrl: "https://picsum.photos/id/0/200/300" },
];
const CartPage = () => {
  return (
    <div>
      {ItemCart.map((item, index) => (
        <ShoppingCart
          key={index}
          title={item.title}
          price={item.price}
          imgUrl={item.imgUrl}
        />
      ))}
    </div>
  );
};

export default CartPage;
