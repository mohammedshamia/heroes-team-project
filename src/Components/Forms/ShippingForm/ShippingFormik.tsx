import { Formik } from "formik";
import ShippingSchema from "../../../Helpers/Validation/ShippingSchema";
import FormShipping from "./FormShipping";
import { shippingValues } from "./interface";
import { useNavigate } from "react-router";
import {  useAppDispatch } from "../../../Store/configureStore";
import { createOrder } from "../../../Store/Slices/orders";
import {IShippingAddress} from '../../../Store/Types'
import { useParams } from "react-router";

const ShippingFormik = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
 const { id } = useParams();
  const initialValues: IShippingAddress = {
    city: "",
    country: "",
    zipCode: "",
    streetAddress: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values:IShippingAddress, actions) => {
        // console.log(values);
        actions.setSubmitting(false);
        dispatch(createOrder(values))
        navigate(`/product/review/placeorder/${id}?city=${values.city}&country=${values.country}&zipCode=${values.zipCode}&streetAddress=${ values.streetAddress}`);
      }}
      validationSchema={ShippingSchema}
      children={FormShipping}
    />
  );
};

export default ShippingFormik;
