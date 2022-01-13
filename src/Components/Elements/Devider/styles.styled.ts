import styled from "styled-components";

export const DividerComponent = styled.hr`
  border: none;

  clear: both;
  display: block;

  width: 100%;

  background: rgba(1, 15, 30, 0.1);
  height: 1px;

  overflow: hidden;
  position: relative;

  &:after {
    background: #fcdd06;
    content: "";

    height: 7px;
    position: absolute;
    width: 100px;

    left: 45%;
  }
`;
