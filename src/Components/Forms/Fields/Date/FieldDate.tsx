import { Field } from "formik";
import { FlexInput, Label, Input, Errors } from "../inputField.style";
interface IProps {
  name: string;
  placeholder: string;
  errors: {};
  touched: {};
  component: Function;
  className?: string;
  label?: string;
  fullWidth?: boolean;
  width?: string;
}
const FieldDate = ({
  name,
  placeholder,
  errors,
  touched,
  component,
  className,
  label,
  fullWidth,
  width,
}: IProps) => {
  return (
    <FlexInput width={width} fullWidth={fullWidth}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        placeholder={placeholder}
        autoComplete={"off"}
        component={component}
        className={className}
      />
      {errors[name] && touched[name] && <Errors>{errors[name]}</Errors>}
    </FlexInput>
  );
};

export default FieldDate;
