import styled from "styled-components";

export const CategoryContainer= styled.div`
  padding: 30px 0;
`

export const CardLayout= styled.div`
  margin: 40px 0 ;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 558px) {
    grid-template-columns: 1fr ;
  }
`