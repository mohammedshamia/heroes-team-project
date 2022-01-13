import { Field, FormikErrors, FormikTouched } from "formik";
import { Errors, Input } from "./inputField.style";

interface Iprops {
  type?: string,
  name: string,
  placeholder?: string,
  errors: FormikErrors<string>,
  touched: FormikTouched<string>,
  label?: string,
  component?: string,
}

function FormInput({
  type,
  name,
  placeholder,
  errors,
  touched,
  label,
  component,
}: Iprops) {

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={"off"}
        component={component}
      />
      {errors[name] && touched[name] && (
        <Errors>{errors[name]}</Errors>
      )}
    </div>
  );
};

export default FormInput;