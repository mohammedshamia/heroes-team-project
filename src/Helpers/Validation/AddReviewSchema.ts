import * as Yup from "yup";
import { IAddReview } from "../../@Types/Validation";

export const AddReviewSchema = (): Yup.SchemaOf<IAddReview> => {
  return Yup.object().shape({
    description: Yup.string()
      .required("Review is required")
      .min(5, "Too Short Review!")
      .max(500, "Too Long Review!"),
    rate: Yup.number()
      .required("rate is required")
      .min(1, "Too Short rate!")
      .max(5, "Too Long rate!"),
  });
};
