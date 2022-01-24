import styled from "styled-components";

interface Props {
  fullScreen?: boolean;
}

export const DialogChildren = styled("div")<Props>`
  width: 100%;
  /* position: relative;
  z-index: 387; */
`;
