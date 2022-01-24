import styled from "styled-components";
import { Flex } from "../styles";

interface Props{
  fullScreen?: boolean,
  maxWidth?: string
}

export const Wrapper= styled('div')<Props>`
  ${Flex};
  flex-direction: column;
  background-color: #383838;
  color: white;
  padding: ${( {fullScreen} )=> fullScreen? '150px ': '50px' } ; ;
  width: ${( {fullScreen, maxWidth} )=> fullScreen? '100% ': maxWidth ? maxWidth : 'auto' } ;
  height: ${( {fullScreen} )=> fullScreen? '100% ': 'auto' } ;
  z-index: 500;
  border-radius: 8px;
`