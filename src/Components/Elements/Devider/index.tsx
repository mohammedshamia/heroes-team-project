import React from "react";
import { DividerComponent } from "./styles.styled";

interface IDivider {}

const Divider: React.FC<IDivider> = () => {
  return (
    <React.Fragment>
      <DividerComponent />
    </React.Fragment>
  );
};

export default Divider;
