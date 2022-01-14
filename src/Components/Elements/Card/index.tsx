import React from 'react'
import { CardSection, Img } from './style';
interface IProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  src?: string;
  alt?: string;
}
export const Card = ({ children, ...props }: IProps) => {
  return <CardSection {...props} >
    {children}
  </CardSection>;
};
export function CardImg({ ...rest }: IProps) {
  return <Img {...rest} />;
}


