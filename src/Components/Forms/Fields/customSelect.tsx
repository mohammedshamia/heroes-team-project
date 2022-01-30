import { FieldProps } from "formik";
import Select from "react-select";
import { Icategories } from "../../../Store/Types";

import { FlexInput, Errors, Label } from "./inputField.style";

export interface CustomSelectProps extends FieldProps {
  options: any[];
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
  errors: any;
  touched: any;
  label?: string;
  fullWidth?: boolean;
  width?: string;
  background?: string;
  name: string;
  onBlur: Function;
}

export const CustomSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  errors,
  touched,
  name,
  background,
  label,
  fullWidth,
  width,
  isMulti = false,
}: CustomSelectProps) => {
  const onChange = (option: Icategories | Icategories[]) => {
    if (options.length > 0) {
      form.setFieldValue(
        field.name,
        (option as []).map((item: any) => item.value)
      );
    }
  };

  const getValue = () => {
    if (options.length > 0) {
      return options.filter((option) => field.value.indexOf(option.value) >= 0);
    } else {
      return "" as any;
    }
  };

  return (
    <FlexInput width={width} fullWidth={fullWidth}>
      <Label htmlFor={label}>{label}</Label>
      <Select
        className={className}
        name={field.name}
        value={getValue()}
        onChange={onChange}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
        onBlur={field.onBlur(field.name)}
      />
      {errors[field.name] && touched[field.name] && (
        <Errors>{errors[field.name]}</Errors>
      )}{" "}
    </FlexInput>
  );
};

export default CustomSelect;
