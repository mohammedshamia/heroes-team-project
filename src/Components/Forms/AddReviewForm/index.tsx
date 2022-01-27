import { Formik } from "formik";
import { IAddReview } from "../../../@Types/Validation";
import { AddReviewSchema } from "../../../Helpers/Validation/AddReviewSchema";
import { addReviewToProducts } from "../../../Store/Slices/products";
import AddReviewForm from "./AddReviewForm";
import { useAppDispatch } from "../../../Store/configureStore";

import { Review } from '../../../Store/Types/index'
const Index = ({
  setModalDisplay,
  rate,
  productId,
}: {
  setModalDisplay: (bool: boolean) => void;
  rate: number;
  productId: string;
}) => {
  const dispatch= useAppDispatch()
  const initialValues: IAddReview = {
    description: "",
  };

  // const dispatch = useAppDispatch();
  console.log(rate, productId);
  // data: { rate: number; review: Review }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {

        const review: Review= {
          rating: rate,
          comment: values.description
        }
        const data= {
          rate,
          review
        }
        dispatch(addReviewToProducts(productId, data ));
        console.log("Reviewed", values);
      }}
      validationSchema={AddReviewSchema}
      children={(formikProps) => (
        <AddReviewForm {...formikProps} setModalDisplay={setModalDisplay} />
      )}
    />
  );
};

export default Index;
