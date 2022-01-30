import { IButton } from "./style";
import { ButtonProp } from "./interface";
export default function Button({ children, disabled, ...props }: ButtonProp) {
  return (
    <IButton {...props} onClick={props.onClick} disabled={disabled}>
      {children}
    </IButton>
  );
}
