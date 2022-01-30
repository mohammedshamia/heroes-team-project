import { Formik } from "formik";
import { IAddReview } from "../../../@Types/Validation";
import { AddReviewSchema } from "../../../Helpers/Validation/AddReviewSchema";
import { addReviewToProducts } from "../../../Store/Slices/products";
import AddReviewForm from "./AddReviewForm";
import { useAppDispatch } from "../../../Store/configureStore";

import { Review } from "../../../Store/Types/index";
const Index = ({
  setModalDisplay,
  rate,
  productId,
}: {
  setModalDisplay: (bool: boolean) => void;
  rate: number;
  productId: string;
}) => {
  const dispatch = useAppDispatch();
  const initialValues: IAddReview = {
    description: "",
    rate: 0,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        const review: Review = {
          rating: values.rate,
          comment: values.description,
        };
        dispatch(addReviewToProducts(productId, review));
        setModalDisplay(false);
      }}
      validationSchema={AddReviewSchema}
      children={(formikProps) => (
        <AddReviewForm
          rate={0}
          {...formikProps}
          setModalDisplay={setModalDisplay}
        />
      )}
    />
  );
};

export default Index;
