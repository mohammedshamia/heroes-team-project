import { Formik } from "formik";
import ShippingSchema from "../../../Helpers/Validation/ShippingSchema";
import FormShipping from "./FormShipping";
import { shippingValues } from "./interface";
import { useNavigate } from "react-router";

const ShippingFormik = () => {
  let navigate = useNavigate();

  const initialValues: shippingValues = {
    city: "",
    country: "",
    zipCode: "",
    streetAddress: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        // console.log(values);
        actions.setSubmitting(false);
        navigate("/product/review/placeorder/3");
      }}
      validationSchema={ShippingSchema}
      children={FormShipping}
    />
  );
};

export default ShippingFormik;
