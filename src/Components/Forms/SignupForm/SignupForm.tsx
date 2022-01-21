import { Field, Form } from "formik";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Elements/Buttons";
import FormInput from "../Fields/inputField";
import { FlexInput, Input, Label } from "../Fields/inputField.style";

interface IProps {
  errors: any;
  touched: any;
}
const SignupForm = ({ errors, touched }: IProps) => {
  useEffect(() => {
    // console.log
  });
  return (
    <Form
      style={{
        borderBottom: "1px solid gray",
        paddingBottom: "25px",
      }}
    >
      <FlexInput>
        <Label>Name</Label>
        <FormInput name="userName" errors={errors} touched={touched} />
      </FlexInput>

      <FlexInput>
        <Label>Enter your email addrees</Label>
        <FormInput name="userEmail" errors={errors} touched={touched} />
      </FlexInput>
      <FlexInput>
        <Label>Enter your password</Label>
        <FormInput
          name="password"
          errors={errors}
          touched={touched}
          type={"password"}
        />
      </FlexInput>

      <FlexInput>
        <Label>Confirm your password</Label>
        <FormInput
          name="confirmPassword"
          errors={errors}
          touched={touched}
          type={"password"}
        />
      </FlexInput>
      <Button
        bold={true}
        backgroundColor="#FCDD06"
        width="100%"
        margin="25px 0 0 0 "
      >
        Sing Up
      </Button>
    </Form>
  );
};

export default SignupForm;
