import styled from "styled-components";

export const ContainerLyout = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 16px;
  overflow: hidden;
  background-color: ${(props) => props.theme.background.default};
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 2px;
  .bla-bla
  {
   font-size:2rem; 
  }
  > div {
    border-radius: 0;
    > div {
      padding: 0;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* gap: 20px; */
  }
`;
