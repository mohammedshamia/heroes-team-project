import { Form } from 'formik';
import styled from 'styled-components'
export const Continer = styled(Form)`

  display: flex;
  background-color: #f2f2f2;
  border-radius: 16px;
  flex-direction:column; 
  padding: 5rem 5rem;
  position:relative; 
  gap:10px; 
  /* @media (max-width: 768px) {
    display:flex; 
    flex-direction: column;
    padding: 1rem;
  } */

  /* @media (max-width: 768px) {
    width: 100%;
  }
  @media (width: 1024px) {
    width: 100%;
  } */
`;
export const InputContainer = styled.div` 
display:flex;
gap:10px; 
`
  