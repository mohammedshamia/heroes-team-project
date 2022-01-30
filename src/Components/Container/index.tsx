import React, { ReactNode } from "react";
import { Wrapper } from "./style";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Container;
