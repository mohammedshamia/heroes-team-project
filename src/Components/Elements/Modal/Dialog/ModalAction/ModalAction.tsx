import React from "react";
import { Actions } from "./styles";

const ModalAction = ({ children }: { children: React.ReactNode }) => {
  return <Actions>{children}</Actions>;
};

export default ModalAction;
