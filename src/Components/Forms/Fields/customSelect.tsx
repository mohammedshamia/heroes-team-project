import { FieldProps } from "formik";
import { type } from "os";
import Select from "react-select";
import { Icategories } from "../../../Store/Types";

import { FlexInput, Errors, Label } from "./inputField.style";

export interface CustomSelectProps extends FieldProps {
  options: Icategories[];
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
  console.log(field);
  console.log(options);

  const onChange = (option: Icategories | Icategories[]) => {
    if (options && options.length > 0) {
      console.log(11);
      form.setFieldValue(
        field.name,
        (option as Icategories[]).map((item: Icategories) => item.name)
      );
    } else {
      console.log(3);
    }
  };

  const getValue = () => {
    if (options && options.length > 0) {
     return options.filter((option) => field.value.indexOf(option.name) >= 0);
    } else {
      console.log(2222);
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
        options={options&&options}
        isMulti={isMulti}
        onBlur={field.onBlur}
      />
      {errors[name] && touched[field.name] && (
        <Errors>{errors[name]}</Errors>
      )}
    </FlexInput>
  );
};

export default CustomSelect;
