import styled from "styled-components";

export const Container = styled.div`
  /* margin: 50px; */
  /* flex: 1 1 33%;
display:flex; 
justify-content: space-between; */
  display: grid;
  /* margin-top: 5rem; */
  grid-template-columns: auto auto auto ;
  /* gap: 2px; */
  /* grid-template-rows: 12px 12px 12px; */
  border: 1px solid #fcdd06;
  border-radius: 16px;
  overflow: hidden;
  background-color: #f7f8fc;
  > div {
    padding-bottom: 0;
    border-inline-end: 2px solid #F2F2F2;
    > div {
      padding: 0;
      border-radius: 0;
      height: 100%;
      .bla-bla {
        flex: 1;
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
  }
`;
