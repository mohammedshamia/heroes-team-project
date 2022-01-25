import { useState } from "react";
import Rate from "../../../Components/Elements/Rating";
import Typography from "../../../Components/Typography";
import { IProduct } from "../../../Store/Types";
import {
  Padding,
  Pragraph,
  Pragraphdate,
  Review,
  Technical,
  Title,
} from "../product.style";

interface IProps {
  productById: IProduct;
}
const Reviews = ({ productById }: IProps) => {
  const [rating, setRating] = useState<number>(3);

  return (
    <>
      <Title>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {" "}
          Reviews
        </Typography>
      </Title>

      <Technical>
        <Review>
          {productById.reviews.length !== 0 ? (
            productById.reviews.map((row) => (
              <Padding>
                {/* <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  paddingTop: "rem",
                }}
              >
                {" "}
                {row.name}
              </Typography> */}
                <Pragraphdate>
                  <Rate
                    rating={row.rating}
                    onRating={(rate: number) => setRating(rate)}
                  />
                  {/* <Typography style={{ fontSize: "12px", color: "#707070" }}>
                  {" "}
                  {row.date}
                </Typography> */}
                </Pragraphdate>
                <Pragraph>
                  <Typography style={{ fontSize: "12px" }}>
                    {" "}
                    {row.comment}
                  </Typography>
                </Pragraph>
              </Padding>
            ))
          ) : (
            <>
              <Padding>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    paddingTop: "rem",
                  }}
                >
                  {" "}
                  Jenifer Medhurst
                </Typography>
                <Pragraphdate>
                  <Rate
                    rating={rating}
                    onRating={(rate: number) => setRating(rate)}
                  />
                  <Typography style={{ fontSize: "12px", color: "#707070" }}>
                    '28th March 2022'
                  </Typography>
                </Pragraphdate>
                <Pragraph>
                  <Typography style={{ fontSize: "12px" }}>
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita.",
                  </Typography>
                </Pragraph>
              </Padding>
            </>
          )}
        </Review>
      </Technical>
    </>
  );
};

export default Reviews;
