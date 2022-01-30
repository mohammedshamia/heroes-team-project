import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Elements/Pagination/style";

import { Wrapper, Text, SVG, Notification } from "./style";

interface ISVGICON {
  description: string;
  to?: string;
  onClick?: Function;
  notification?: number;
}

const SVGICON: FC<ISVGICON> = ({
  children,
  description,
  to,
  onClick,
  notification,
}) => {
  return (
    <Wrapper onClick={onClick} to={to} as={onClick ? Button : Link}>
      <SVG>{children}</SVG>
      {notification ? <Notification>{notification}</Notification> : null}
      <Text>{description}</Text>
    </Wrapper>
  );
};

export default SVGICON;
