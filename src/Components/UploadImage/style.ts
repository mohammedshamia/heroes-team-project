import styled from "styled-components";

interface IPorps {
  bgColor?: string;
  width?: string;
  height?: string;
  bg?: string;
}

export const FileInput = styled.div<IPorps>`
  background-color: ${(props) => props.bgColor || props.theme.background.paper};
  background: ${(props) =>
    props.bg
      ? `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),  url(${props.bg})`
      : ""};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  position: relative;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  & input {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 99999;
    &::-webkit-file-upload-button {
      visibility: hidden;
    }
  }
`;
