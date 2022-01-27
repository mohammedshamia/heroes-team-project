import { useMemo, useState } from "react";
import { useTheme } from "styled-components";
import AddReview from "../../AddReview";
import AddReviewForm from "../../Forms/AddReviewForm/AddReviewForm";
import FilledStar from "../../Icons/Star";
import Button from "../Buttons";
import Modal from "../Modal/Dialog/Modal";
import ModalAction from "../Modal/Dialog/ModalAction/ModalAction";
import ModalTitle from "../Modal/Dialog/ModalTitle/ModalTitle";
interface PropRating {
  count?: number;
  rating: number;
  onRating: any;
  productId: string;
}
const Rate = ({ count = 5, rating = 0, onRating, productId }: PropRating) => {
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [ActualRation, setActualRation] = useState<number>(0);
  const [uploadImagedModalDisplay, setUploadImagedModalDisplay] =
    useState<boolean>(false);

  const handleRating = (index: number) => {
    onRating(index + 1);
    setActualRation(index + 1);
    setUploadImagedModalDisplay(true);
  };

  const getColor = (index: any) => {
    if (hoverRating >= index) {
      return true;
    } else if (!hoverRating && rating >= index) {
      return true;
    }

    return false;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx, index) => (
        <FilledStar
          key={idx}
          onClick={() => handleRating(index)}
          color={getColor(idx)}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, rating, hoverRating]);

  return (
    <>
      <div>{starRating} </div>

      {uploadImagedModalDisplay && (
        <AddReview
          productId={productId}
          rate={ActualRation}
          modalDisplay={uploadImagedModalDisplay}
          setModalDisplay={setUploadImagedModalDisplay}
        />
      )}
    </>
  );
};
export default Rate;
