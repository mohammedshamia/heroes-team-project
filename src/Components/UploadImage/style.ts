import styled from "styled-components";

interface IPorps {
  bgColor?: string;
  width?: string;
  height?: string;
}

export const FileInput = styled.div<IPorps>`
  background-color: ${(props) => props.bgColor || props.theme.background.paper};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  & input {
    width: 100%;
    height: 100%;
    opacity: 0;
    &::-webkit-file-upload-button {
      visibility: hidden;
    }
  }
`;
