import { Form } from "formik";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/configureStore";
import Button from "../../Elements/Buttons";
import FormInput from "../Fields/inputField";
import { FlexInput, Label } from "../Fields/inputField.style";

interface IProps {
  errors: any;
  touched: any;
}
const SignupForm = ({ errors, touched }: IProps) => {
  let user = useSelector((state: RootState) => state.entities.user);

  useEffect(() => {
    // console.log
  });
  return (
    <Form>
      <FlexInput>
        <Label>First name</Label>
        <FormInput name="firstName" errors={errors} touched={touched} />
      </FlexInput>

      <FlexInput>
        <Label>Last name</Label>
        <FormInput name="lastName" errors={errors} touched={touched} />
      </FlexInput>

      <FlexInput>
        <Label>Enter your email addrees</Label>
        <FormInput name="email" errors={errors} touched={touched} />
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
          name="passwordConfirmation"
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
        {user.loading ? "Loading..." : "Sing Up"}
      </Button>
    </Form>
  );
};

export default SignupForm;
