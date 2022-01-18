import React from "react";
import { Styling } from "./DynamicComponent";

export interface ITypography extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string;
  gutterBottom?: boolean;
  align?: string;
  children: React.ReactNode;
  fontWeight?: number;
}

const returnComponent: React.FC<ITypography> = ({
  variant = "h6",
  gutterBottom,
  align,
  children,
  fontWeight,
  ...rest
}) => {
  return (
    <Styling
      fontWeight={fontWeight}
      variant={variant}
      align={align}
      gutterBottom={gutterBottom}
      {...rest}
    >
      {children}
    </Styling>
  );
};

const Typography: React.FC<ITypography> = (props) => {
  return <React.Fragment>{returnComponent(props)}</React.Fragment>;
};

export default Typography;
