import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Elements/Pagination/style";

import { Wrapper, Text, SVG } from "./style";

interface ISVGICON {
  description: string;
  to?: string;
  onClick?: Function;
}

const SVGICON: FC<ISVGICON> = ({ children, description, to, onClick }) => {
  return (
    <Wrapper onClick={onClick} to={to} as={onClick ? Button : Link}>
      <SVG>{children}</SVG>
      <Text>{description}</Text>
    </Wrapper>
  );
};

export default SVGICON;
