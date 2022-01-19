import styled from "styled-components";

export const ContainerLyout = styled.div`

  display: grid;
  grid-template-columns: auto auto auto ;
  border: 1px solid #fcdd06;
  border-radius: 16px;
  overflow: hidden;
  background-color: #f7f8fc;
  margin-top:30px; 
  margin-bottom:30px; 
  
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
