import styled from "styled-components";

export const CartNotifacations = styled.div`
  position: relative;
  width: 350px;
  height: 450px;
  display: flex;
  justify-content: end;
`;

export const CartIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: gray;
  cursor: pointer;
  z-index: 10;
`;

export const NotifacationsList = styled.div`
  top: 37px;
  width: 100%;
  height: 100%;
  background-color: gray;
  border-radius: 8px;
  position: absolute;
`;
