import { useState, ChangeEvent } from "react";
import { DateInputStyle } from "../inputField.style";
interface Iprops {
  placeholder: string,
  field: { name: string, onBlur: Function, value: string },
  form: { setFieldValue: (name: string, value: string) => {} },
};

function DateInput(props: Iprops) {
  const { field: { name, onBlur, value },
    form: { setFieldValue }, placeholder } = props
  const [isFoucs, setIsFocus] = useState<boolean>(false);
  return (
    <DateInputStyle
      onFocus={() => setIsFocus(true)}
      value={value && value}      
      type={isFoucs ? "date" : "text"}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue(name, e.target.value)}
      onBlur={onBlur(name)}
      placeholder={placeholder}
    />
  );
};

export default DateInput;
