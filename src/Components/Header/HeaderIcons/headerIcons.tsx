import React, { FC } from "react";

import { Wrapper, Text, SVG } from "./style";

interface ISVGICON {
  description: string;
}

const SVGICON: FC<ISVGICON> = ({ children, description }) => {
  return (
    <Wrapper>
      <SVG>{children}</SVG>
      <Text>{description}</Text>
    </Wrapper>
  );
};

export default SVGICON;
