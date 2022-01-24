import React, { useEffect } from "react";

import ImageSection from "./Components/imageSection";
import ProductDetails from "./Components/productDetails";
import { FirstSection, LinkBack, TitleLink } from "./product.style";
import Container from "../../Components/Container";
import Specification from "./Components/specification";
import Reviews from "./Components/reviews";
import CardSliders from "./Components/cardSlider";
import Typography from "../../Components/Typography";
import { useParams } from "react-router";
import {
  getProductsById,
  getAllProductsByPaginate,
} from "../../Store/Slices/products";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../Store/configureStore";
import SppinerLoading from "../../Components/Elements/SppinerLoading";

const ProductPage = () => {
  const dispatch = useAppDispatch();

  let { productById, loading } = useSelector(
    (state: RootState) => state.entities.products
  );

  const { id } = useParams();

  useEffect(() => {
    id && dispatch(getProductsById({ id }));

    dispatch(getAllProductsByPaginate());
  }, [dispatch, id]);

  return (
    <React.Fragment>
      {loading ? (
        <SppinerLoading />
      ) : (
        <React.Fragment>
          {productById ? (
            <React.Fragment>
              <Container>
                <TitleLink>
                  <Typography
                    style={{ fontSize: "15px", letterSpacing: "0.96px" }}
                  >
                    <LinkBack to="/">Back </LinkBack> / {productById.name}
                  </Typography>
                </TitleLink>
                <FirstSection>
                  <ImageSection productById={productById} />
                  <ProductDetails productById={productById} />
                </FirstSection>
                <Specification />
                <Reviews productById={productById} />
              </Container>

              <CardSliders />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography style={{ fontSize: "15px", letterSpacing: "0.96px" }}>
                <LinkBack to="/">Back </LinkBack>
              </Typography>
              <Typography variant="h1">Not Found Product</Typography>
            </React.Fragment>
          )}{" "}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ProductPage;
