import { HTMLProps, ReactNode } from "react";
import { Alert } from "./style";

type positions = "normal" | "snackBar";

type types = "default" | "card" | "success" | "warning" | "error";

interface IProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  component?: any;
  position?: positions;
  type?: types;
  setOpen?: (boo: boolean) => void;
  open?: boolean;
}

const AlertMessage = ({
  children,
  component,
  position = "normal",
  type = "default",
  setOpen,
  open,
  ...rest
}: IProps) => {
  window.setTimeout(() => {
    if (position === "snackBar" && setOpen) {
      setOpen(false);
    }
  }, 5000);

  return (
    <Alert as={component} {...rest} type={type} position={position} open={open}>
      {children}
    </Alert>
  );
};

export default AlertMessage;
