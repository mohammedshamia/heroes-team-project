import { Form } from 'formik';
import styled from 'styled-components'
export const Continer = styled(Form)`
  /* width: 80%; */
  /* background-color:#F2F2F2 ; 
 border-radius:16px;  */
 /* margin:  70px;  */
  display: flex;
  background-color: #f2f2f2;
  border-radius: 16px;
  flex-direction:column; 
  padding: 5rem 5rem;
  position:relative; 
  justify-content: space-between;
  @media (max-width: 768px) {
    display:flex; 
    flex-direction: column;
    padding: 1rem;
  }
  /* margin-top: 2rem; */
  gap:10px; 
  /* width:50%;  */
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (width: 1024px) {
    width: 100%;
  }
`;
export const InputContainer = styled.div` 
display:flex;
gap:10px; 
`
  