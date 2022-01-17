import React, { FC } from "react";

import { Wrapper, Text, SVG } from "./style";

interface ISVGICON {
  description: string;
  to: string;
}

const SVGICON: FC<ISVGICON> = ({ children, description, to }) => {
  return (
    <Wrapper to={to}>
      <SVG>{children}</SVG>
      <Text>{description}</Text>
    </Wrapper>
  );
};

export default SVGICON;
