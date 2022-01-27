import React from "react";
import { Title } from "./style";
const ModalTitle = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: {};
}) => {
  return <Title>{children}</Title>;
};

export default ModalTitle;
