import styled from "styled-components";
import { FullScreen } from "../styles";
export const Overlay = styled.div`
  ${FullScreen};
  background-color: #38383893;
  z-index: 100;
`;

//    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//    opacity: props.show ? '1' : '0' ,
// transition: all 1s ease-in-out;
