import { Formik } from "formik";
import { IAddReview } from "../../../@Types/Validation";
import { AddReviewSchema } from "../../../Helpers/Validation/AddReviewSchema";
// import { useAppDispatch } from "../../../Store/configureStore";
// import { addReviewToProducts } from "../../../Store/Slices/products";
import AddReviewForm from "./AddReviewForm";

const Index = ({
  setModalDisplay,
  rate,
  productId,
}: {
  setModalDisplay: (bool: boolean) => void;
  rate: number;
  productId: string;
}) => {
  const initialValues: IAddReview = {
    description: "",
  };

  // const dispatch = useAppDispatch();
  console.log(rate, productId);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        // dispatch(addReviewToProducts(productId, { rate, values.description }));
        console.log("ChangePassword submitted", values, rate, productId);
      }}
      validationSchema={AddReviewSchema}
      children={(formikProps) => (
        <AddReviewForm {...formikProps} setModalDisplay={setModalDisplay} />
      )}
    />
  );
};

export default Index;
