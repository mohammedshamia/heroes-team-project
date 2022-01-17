import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
  cursor: pointer;
`;

export const Text = styled.div`
  color: white;
  font-size: 13px;
`;

export const SVG = styled.div`
  height: 20px;
  width: 20px;
  text-align: center;
`;
