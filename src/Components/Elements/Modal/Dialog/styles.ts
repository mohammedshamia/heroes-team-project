import styled, { css } from "styled-components";

export const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullScreen = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  ${FullScreen};
  ${Flex};
  z-index: 150;
`;
