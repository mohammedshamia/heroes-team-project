
import { Form, FormikProps } from "formik";
import React from "react";
import Button from "../../Elements/Buttons";
// import Typography from "../../Typography";
import FormInput from "../Fields/inputField";
import { Continer } from './style'
import { shippingValues } from "./interface";
import {

} from "./style";
import Typography from "../../Typography";

import { InputContainer } from './style'
const FormShipping = (
  props: FormikProps<shippingValues>
) => {
  const { errors, touched, } = props;

  return ( 
    <Continer id= "form">
      <div> 
      <Typography variant="h6" fontWeight={700}> Shipping Address </Typography>
      <InputContainer>
        <FormInput
          type="input"
          name={"country"}
          placeholder={" country"}
          touched={touched}
          errors={errors}
          label={"Countery"}
          fullWidth={false}
          width={"30%"}
          background={"#F2F2F2"}
        />
        <FormInput
          type="input"
          name={"city"}
          placeholder={"City"}
          touched={touched}
          errors={errors}
          label={"city"}
          fullWidth={false}
          width={"30%"}
          background={"#F2F2F2"}
        />
      </InputContainer>
      <InputContainer>
        <FormInput
          type="input"
          name={"zipCode"}
          placeholder={"Zip Code"}
          touched={touched}
          errors={errors}
          label={"Zip Code"}
          fullWidth={false}
          width={"30%"}
          background={"#F2F2F2"}
        />
        <FormInput
          type="input"
          name={"streetAddress"}
          placeholder={"Street Address"}
          touched={touched}
          errors={errors}
          label={"Street Address"}
          fullWidth={false}
          width={"30%"}
          background={"#F2F2F2"}
        />
      </InputContainer>
      </div>
        {/*  */}

 

      </Continer >
    
  );
};

export default FormShipping;
