import React from "react";
import { Wrapper } from "./styles";

interface Props {
  children: React.ReactNode;
  fullScreen?: boolean;
  maxWidth?: string; // By % unit
}

const DialogWrapper = ({ children, fullScreen, maxWidth }: Props) => {
  return (
    <Wrapper fullScreen={fullScreen} maxWidth={maxWidth}>
      {children}
    </Wrapper>
  );
};

export default DialogWrapper;
