import { object, string, SchemaOf } from "yup";
import { IShipping } from "../../@Types/Validation";
const ShippingSchema = (): SchemaOf<IShipping> => {
  return object().shape({
    country: string().required("Please Enter Country"),
    city: string().required("Please Enter City "),
    zipCode: string().required("Please Enter Zip Code"),
    streetAddress: string().required("Please Enter Street Address"),
  });
};

export default ShippingSchema;
