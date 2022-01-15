import React, { useEffect } from "react";
import { Alert } from "./style";

type positions = "normal" | "snackBar";

type types = "default" | "success" | "warning" | "error";

interface IProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
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
    setOpen(false);
  }, 6000);

  return (
    <Alert as={component} {...rest} type={type} position={position}>
      {children}
    </Alert>
  );
};

export default Index;
