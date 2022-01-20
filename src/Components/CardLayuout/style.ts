import styled from "styled-components";

export const ContainerLyout = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 16px;
  overflow: hidden;
  background-color: ${(props) => props.theme.background.paper};
  margin-top: 30px;
  margin-bottom: 30px;

  > div {
    padding-bottom: 0;
    border-radius: 0; 
    border-inline-end: 2px solid ${(props) => props.theme.background.secondary};
    > div {
      padding: 0;
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
