import styled from "styled-components";

export const Container = styled.div`
  margin: 50px;
  /* flex: 1 1 33%;
display:flex; 
justify-content: space-between; */
  display: grid;
  grid-template-columns: 400px 400px 400px;
  gap: 2px;
  /* grid-template-rows: 12px 12px 12px; */
  border: 1px solid #fcdd06;
  border-radius: 16px;
  overflow: hidden;
  background-color: #f7f8fc;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
  }
`;
