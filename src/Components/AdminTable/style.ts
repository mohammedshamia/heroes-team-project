import styled from "styled-components";

export const StyledTable = styled.div`
  width: 100%;
  & table {
    width: 100%;
    & th,
    td {
      text-align: start;
      padding: 15px 35px 19px;
      color: ${(props) => props.theme.textColors.primary};
      font-size: 22px;
      font-weight: 500;
    }
    & tbody {
      transition: all 0.1s;
      &:nth-child(odd) {
        border-radius: 10px;
        background-color: ${(props) => props.theme.background.default};
      }
      &:nth-child(even) {
        background-color: ${(props) => props.theme.background.secondary};
      }
      &:hover {
        background-color: #c2c2c2;
      }
    }
  }
`;
export const UpperArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
