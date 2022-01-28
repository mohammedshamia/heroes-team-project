import { useState } from "react";
import AddReview from "../../../Components/AddReview";
import Button from "../../../Components/Elements/Buttons";
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
  const [uploadImagedModalDisplay, setUploadImagedModalDisplay] =
    useState<boolean>(false);

  const handleOpenReviewDialog = () => {
    setUploadImagedModalDisplay(true);
  };
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
          {console.log(productById.reviews)}
          {productById.reviews.length !== 0 ? (
            productById.reviews.map((row) => (
              <Padding key={row._id}>
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
                  <Rate rating={row.rating} onRating={() => {}} />
                  <Typography style={{ fontSize: "12px" }}>
                    {" "}
                    {row.createdAt?.slice(0, 10)}
                  </Typography>
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
                  No Reviews
                </Typography>
              </Padding>
            </>
          )}
        </Review>
        <Button onClick={handleOpenReviewDialog}>Add Review</Button>
      </Technical>
      {uploadImagedModalDisplay && (
        <AddReview
          productId={productById._id}
          rate={Math.round(productById.rating)}
          modalDisplay={uploadImagedModalDisplay}
          setModalDisplay={setUploadImagedModalDisplay}
        />
      )}
    </>
  );
};

export default Reviews;
