import { HTMLProps, ReactNode } from "react";
import { Alert } from "./style";

type positions = "normal" | "snackBar";

type types = "default" | "card" | "success" | "warning" | "error";

interface IProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  component?: any;
  position?: positions;
  type?: types;
  setOpen: (boo: boolean) => void;
}

const Index = ({
  children,
  component,
  position = "normal",
  type = "default",
  setOpen,
  ...rest
}: IProps) => {
  window.setTimeout(() => {
    console.log("out!");
    if (position === "snackBar") {
      setOpen(false);
    }
  }, 6000);

  return (
    <Alert as={component} {...rest} type={type} position={position}>
      {children}
    </Alert>
  );
};

export default Index;
