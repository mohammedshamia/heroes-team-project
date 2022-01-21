import React from "react";
import Container from "../../Components/Container";
import ShoppingCart from "../../Components/Elements/Card/ShoppingCart";
import Typography from "../../Components/Typography";
import { LinkBack, Parent, TitleLink, Wrapper } from "./style";
import SubTotal from "./SubTotal";
const ItemCart = [
  {
    title: "Apple iPhone 11 Pro 256GB Memory",
    price: 565,
    imgUrl: "https://picsum.photos/id/1/200/300",
  },
  { title: "phone", price: 551, imgUrl: "https://picsum.photos/id/10/200/300" },
  { title: "mobile", price: 544, imgUrl: "https://picsum.photos/id/0/200/300" },
];
const CartPage = () => {
  return (
    <Container>
      <TitleLink>
        <Typography style={{ fontSize: "15px", letterSpacing: "0.96px" }}>
          <LinkBack to="/">Back </LinkBack> / Cart
        </Typography>
      </TitleLink>
      <Parent>
        <Wrapper>
          {ItemCart.map((item, index) => (
            <ShoppingCart
              key={index}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
            />
          ))}
        </Wrapper>
        <SubTotal />
      </Parent>
    </Container>
  );
};

export default CartPage;
