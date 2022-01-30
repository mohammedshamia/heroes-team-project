import Container from "../../Components/Container";
import Typography from "../../Components/Typography";
import { ContainerShoppingCartEmpty, LinkBack, Parent, TitleLink, Wrapper } from "./style";
import SubTotal from "./SubTotal";
import { RootState } from "../../Store/configureStore";
import { useSelector } from "react-redux";
import CardLayout from "../../Components/CardLayuout";
import { Categ } from "../HomePage/style";
import { DividerComponent } from "../../Components/Elements/Devider/styles.styled";
import ShoppingCart from "../../Components/Elements/Card/ShoppingCart";

const CartPage = () => {
  const { data, loading } = useSelector(
    (state: RootState) => state?.entities?.user
  );

  return (
    <Container>
      <TitleLink>
        <Typography style={{ fontSize: "15px", letterSpacing: "0.96px" }}>
          <LinkBack to="/">Back </LinkBack> / Shopping Cart
        </Typography>
      </TitleLink>
      <Parent>
        {!loading ? (
          <>
            {(data?.cart?.items?.length as number) > 0 ? (
              <Wrapper>
                <ShoppingCart data={data?.cart} />
              </Wrapper>
            ) : (
                <ContainerShoppingCartEmpty>
                  <Typography variant="h3" fontWeight={700}> Your shopping cart is Empty!  </Typography>
                <img src="Assets/Group 491.png" alt="" />
                </ContainerShoppingCartEmpty>
            )}
          </>
        ) : (
          ""
        )}
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
