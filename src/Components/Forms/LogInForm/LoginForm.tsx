import { Field, Form } from "formik";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useTheme } from "styled-components";
import { RootState } from "../../../Store/configureStore";
import Button from "../../Elements/Buttons";
import FormInput from "../Fields/inputField";
import { FlexInput, Label } from "../Fields/inputField.style";

interface IProps {
  errors: any;
  touched: any;
}
const LoginForm = ({ errors, touched }: IProps) => {
  const theme = useTheme();
  let user = useSelector((state: RootState) => state.entities.user);

  return (
    <Form>
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

      <Button
        // type="submit"
        bold={true}
        backgroundColor="#FCDD06"
        width="100%"
        margin="25px 0 0 0 "
      >
        {user.loading ? "Loading..." : "Login"}
      </Button>

      <FlexInput
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          marginTop: "15px",
        }}
      >
        <Field
          id="rememberMe"
          component="input"
          type={"checkbox"}
          name={"rememberMe"}
        />
        <Label htmlFor="rememverMe">Remember me</Label>
      </FlexInput>

      <div style={{ textAlign: "center" }}>
        <NavLink
          style={{
            fontSize: "16px",
            color: theme.textColors.secondary,
            textDecoration: "none",
          }}
          to={"/"}
        >
          Forgot your password?
        </NavLink>
      </div>
    </Form>
  );
};

export default LoginForm;
