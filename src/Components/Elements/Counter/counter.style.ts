import styled from "styled-components";
export const ContainerCounter = styled.div`
  display: flex;
  width: 110px;
  justify-content: space-between;
  height: 25px;
  background-color: ${(props) => props.theme.background.secondary};
  line-height: 1.6;
`;
export const CounterDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15px;
  text-align: center;
  color: ${(props) => props.theme.textColors.primary};
`;
