import styled from "styled-components";
export const ContainerCounter = styled.div`
  display: flex;
  width: 110px;
  /* border: 1px solid ${(props) => props.theme.textColors.secondary}; */
  justify-content: space-between;
  height: 25px;
  background-color: ${(props) => props.theme.background.default};
  line-height: 1.6;
`;
export const CounterDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15px;
  text-align: center;
  color: ${(props) => props.theme.textColors.primary};
`;
