import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 9px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  position: relative;
  &:focus-visible {
    outline: none;
  }
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

export const Notification = styled.span`
  background-color: yellow;
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 8px;
  top: 0;
  right: 0;

  text-align: center;
`;
