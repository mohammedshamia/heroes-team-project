import styled from "styled-components";

export const StyledTable = styled.div`
  width: 100%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  & table {
    width: 100%;
    & th,
    td {
      text-align: start;
      padding: 1rem 2rem;
      color: ${(props) => props.theme.textColors.primary};
      font-size: 18px;
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
        background-color: ${(props) =>
          props.theme.type === "light" ? "#c2c2c2" : "#456"};
      }
    }
  }
`;
export const UpperArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const RelativeTh = styled.th`
  position: relative;
  &:hover > div {
    display: block;
  }
`;
export const ImageDiv = styled.div`
  background-color: ${(props) => props.theme.background.paper};
  display: none;
  position: absolute;
  width: 10rem;
  height: 10rem;
  bottom: 0;
  right: 0;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
