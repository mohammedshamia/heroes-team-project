
import { Errors, FlexInput, Input, Label } from "./inputField.style";

interface Iprops {
  type?: string;
  name: string;
  placeholder?: string;
  errors: any;
  touched: any;
  label?: string;
  component?: string;
  fullWidth?: boolean;
  width?: string;
  background?: string;
  children?: React.ReactNode
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
  children,
}: Iprops) {


  return (
    <FlexInput width={width} fullWidth={fullWidth}>
      <Label htmlFor={name}>{label}</Label>
      <div style={{ position: "relative" }}> 
      <Input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={"off"}
        component={component}
        background={background}
        />
        {children}
      </div>
      {errors[name] && touched[name] && <Errors>{errors[name]}</Errors>}
    </FlexInput>
  );
}

export default FormInput;
