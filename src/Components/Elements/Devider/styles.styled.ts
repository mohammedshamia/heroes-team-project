import styled from "styled-components";

export const DividerComponent = styled.div<{ center?: boolean }>`
  border: none;

  display: block;

  width: 100%;

  /* background: rgba(1, 15, 30, 0.1); */
  background-color: ${(props) => props.theme.textColors.divider};
  height: 2px;
  display: flex;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};

  &:after {
    background: #fcdd06;
    border-radius: 2px;
    content: "";
    margin-top: -5px;
    height: 5px;
    width: 200px;
  }
`;
