import { Field, FormikErrors, FormikTouched } from "formik";
import { Errors, FlexInput, Input, Label } from "./inputField.style";

interface Iprops {
  type?: string;
  name: string;
  placeholder?: string;
  errors: {};
  touched: {};
  label?: string;
  component?: string;
  fullWidth?: boolean;
  width?: string;
  background?:string
}

function FormInput({
  type,
  name,
  placeholder,
  errors,
  touched,
  background,
  label,
  component,
  fullWidth,
  width,
}: Iprops) {
  return (
    <FlexInput width={width} fullWidth={fullWidth}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={"off"}
        component={component}
        background={background}
      />
      {errors[name] && touched[name] && <Errors>{errors[name]}</Errors>}
    </FlexInput>
  );
}

export default FormInput;
