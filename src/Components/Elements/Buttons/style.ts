import styled from "styled-components";
import { ButtonProp } from "./interface";

export const IButton = styled.button<ButtonProp>`
  color: ${(props) => (props.color ? props.color : props.theme.common.black)};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.primary};
  padding: ${(props) => props.padding || "12px 65px"};
  border-radius: ${(props) => props?.borderRaduies || "10px"};
  font-size: ${(props) => props?.fontSize || "16px"};
  border: ${(props) => props?.border || "none"};
  margin: ${(props) => props?.margin || null};
  outline: none;
  cursor: pointer;
  font-weight: ${(props) => (props.bold ? "bold" : "500")};
  width: ${({ width }) => width || "auto"};
  opacity: ${(props) => (props.disabled ? ".5" : "1")};
  position: ${(props) => props.position || null};
  top: ${(props) => props.top || null};
  bottom: ${(props) => props.bottom || null};
  right: ${(props) => props.right || null};

  &:hover {
    border: ${(props) => props?.borderHover || null};
    color: ${(props) => props.theme.textColors.secondary};
    background-color: ${(props) =>
      props.backgroundColor
        ? props.backgroundColor
        : props.theme.colors.secondary};
  }
`;
