import React from "react";
import Container from "../../Components/Container";
import ShoppingCart from "../../Components/Elements/Card/ShoppingCart";
import Typography from "../../Components/Typography";
import { LinkBack, Parent, TitleLink, Wrapper } from "./style";
import SubTotal from "./SubTotal";
import { RootState } from "../../Store/configureStore";
import { useSelector } from "react-redux";
import CardLayout from "../../Components/CardLayuout";
import { Categ } from "../HomePage/style";
import { DividerComponent } from "../../Components/Elements/Devider/styles.styled";

const CartPage = () => {
  const { data } = useSelector((state: RootState) => state?.entities?.user);

  return (
    <Container>
      <TitleLink>
        <Typography style={{ fontSize: "15px", letterSpacing: "0.96px" }}>
          <LinkBack to="/">Back </LinkBack> / Cart
        </Typography>
      </TitleLink>
      <Parent>
        <Wrapper>
          {(data?.cart?.items?.length as number) > 0 ? (
            <>
              <ShoppingCart data={data?.cart} />
            </>
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="Assets/Group 491.png" alt="" />
            </div>
          )}
        </Wrapper>
        {(data?.cart?.items?.length as number) > 0 && (
          <SubTotal data={data?.cart && data.cart} />
        )}
      </Parent>
      {(data?.cart?.items?.length as number) === 0 && (
        <>
          <Categ>
            <Typography
              variant="h5"
              fontWeight={700}
              style={{ marginTop: "50px" }}
            >
              Recently viewed
            </Typography>
          </Categ>
          <DividerComponent />
          <CardLayout />
        </>
      )}
    </Container>
  );
};

export default CartPage;
