import React, { ReactNode } from "react";
import { Wrapper } from "./style";

interface IProps {
  children: ReactNode;
}

const Container = ({ children }: IProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
