import styled from "styled-components";
import { ButtonProp } from "./interface";

export const IButton = styled.button<ButtonProp>`
  color: ${(props) => (props.color ? props.color : props.theme.common.black)};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.primary};
  padding: ${(props) => props.padding || "12px 65px"};
  border-radius: ${(props) => props?.borderRaduies || "10px"};
  font-size: ${(props) => props?.fontSize || "16px"};
  border: ${(props) => props?.border || "1px solid transparent"};
  margin: ${(props) => props?.margin || null};
  outline: none;
  cursor: pointer;
  font-weight: ${(props) => (props.bold ? "bold" : "500")};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  opacity: ${(props) => (props.disabled ? ".5" : "1")};
  position: ${(props) => props.position || null};
  top: ${(props) => props.top || null};
  bottom: ${(props) => props.bottom || null};
  right: ${(props) => props.right || null};

  &:hover {
    border: ${(props) => props?.borderHover || null};
    background-color: ${(props) =>
      props.backgroundColor
        ? props.backgroundColor
        : props.theme.colors.secondary};
  }

  position: relative;
  overflow: hidden;
  transition: all 1s;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 200%;
    position: absolute;
    left: -180%;
    top: -2px;
    opacity: 0.5;
    transform: rotate(20deg);
    box-shadow: 5px 5px 5px 15px #fff9d0;
  }

  &:hover::after {
    left: 180%;
    transition: all 0.8s ease-out;
  }
`;
