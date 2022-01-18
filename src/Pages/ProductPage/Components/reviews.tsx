import React from "react";
import Typography from "../../../Components/Typography";
import { IProductData } from "../interface";
import {
  Padding,
  Pragraph,
  Pragraphdate,
  ProductDetail,
  Review,
  Technical,
  Title,
} from "../product.style";

interface IProps {
  ProductData: IProductData[];
}
const Reviews = ({ ProductData }: IProps) => {
  return (
    <ProductDetail>
      <Title>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {" "}
          Reviews
        </Typography>
      </Title>

      <Technical>
        <Review>
          {ProductData[0].reviews.map((row) => (
            <Padding>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  paddingTop: "rem",
                }}
              >
                {" "}
                {row.name}
              </Typography>
              <Pragraphdate>
                {row.rating}
                <Typography style={{ fontSize: "12px", color: "#707070" }}>
                  {" "}
                  {row.date}
                </Typography>
              </Pragraphdate>
              <Pragraph>
                <Typography style={{ fontSize: "12px" }}>
                  {" "}
                  {row.text}
                </Typography>
              </Pragraph>
            </Padding>
          ))}
        </Review>
      </Technical>
    </ProductDetail>
  );
};

export default Reviews;
