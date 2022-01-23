import React from "react";
import Container from "../../Components/Container";
import ShoppingCart from "../../Components/Elements/Card/ShoppingCart";
import Typography from "../../Components/Typography";
import { LinkBack, Parent, TitleLink, Wrapper } from "./style";
import SubTotal from "./SubTotal";
import { RootState } from "../../Store/configureStore";
import { useSelector } from "react-redux";


import SppinerLoading from "../../Components/Elements/SppinerLoading";

const CartPage = () => {
  let { data, loading } = useSelector((state: RootState) => state?.entities?.user);



  // console.log(state);
  return (
    <Container>
      <TitleLink>
        <Typography style={{ fontSize: "15px", letterSpacing: "0.96px" }}>
          <LinkBack to="/">Back </LinkBack> / Cart
        </Typography>
      </TitleLink>
      <Parent>
        <Wrapper>
          {loading ? <SppinerLoading /> :
            data?.cart ? (

              <ShoppingCart
                data={data.cart}
              /> 
            )
              : (

                <div>Fff</div>
              )
          }
        </Wrapper>
        <SubTotal data={data?.cart && data.cart}
        />
      </Parent>
    </Container>
  );
};

export default CartPage;
function dispatch(arg0: { payload: any; type: string; }) {
  throw new Error("Function not implemented.");
}

