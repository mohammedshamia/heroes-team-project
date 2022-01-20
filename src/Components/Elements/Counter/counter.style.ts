import styled from "styled-components";
export const ContainerCounter = styled.div`
  display: flex;
  width: 110px;
  border: 1px solid  ${props => props.theme.textColors.secondary};
  justify-content: space-between;
  height: 25px;
  /* background-color: #fff; */
  background-color: ${props => props.theme.background.paper}; 
`;
export const CounterDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15px;
  text-align: center;
`;
