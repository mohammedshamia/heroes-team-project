import { Form } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/configureStore";
import Button from "../../Elements/Buttons";
import Eye from "../../Icons/eye";
import EyeOff from "../../Icons/EyeOff";
import FormInput from "../Fields/inputField";
import { FlexInput, Label, Icon } from "../Fields/inputField.style";
interface IProps {
  errors: any;
  touched: any;
}
const SignupForm = ({ errors, touched }: IProps) => {
  let user = useSelector((state: RootState) => state.entities.user);

  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);

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
          type={state ? "text" : "password"}
          children={
            <Icon
              onClick={() => {
                setState(!state);
              }}
            >
              {" "}
              {state ? <Eye /> : <EyeOff />}
            </Icon>
          }
        />
      </FlexInput>

      <FlexInput>
        <Label>Confirm your password</Label>
        <FormInput
          name="passwordConfirmation"
          errors={errors}
          touched={touched}
          type={state2 ? "text" : "password"}
          children={
            <Icon
              onClick={() => {
                setState2(!state2);
              }}
            >
              {" "}
              <Eye />
            </Icon>
          }
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
