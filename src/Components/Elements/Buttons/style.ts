import styled from "styled-components";
import { ButtonProp } from "./interface";

export const IButton = styled.button<ButtonProp>`
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.backgroundColor || "#f2f2f2"};
  padding: ${(props) => props.padding || "12px 65px"};
  border-radius: ${(props) => props?.borderRaduies || "10px"};
  font-size: ${(props) => props?.fontSize || "16px"};
  border: ${(props) => props?.border || "none"};
  margin: ${(props) => props?.margin || null};
  outline: none;
  cursor: pointer;
  font-weight: ${(props) => (props.bold ? "bold" : "500")};
  width: ${({width})=> width || 'auto'};
  &:hover {
    border: ${(props) => props?.borderHover || null};
    color: ${(props) => props?.colorHover || null};
  }
`;
