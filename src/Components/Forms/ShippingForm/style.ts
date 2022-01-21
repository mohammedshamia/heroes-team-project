import { Form } from 'formik';
import styled from 'styled-components'
export const Continer = styled(Form)`

  display: flex;
  background-color: ${props => props.theme.background.paper} ;
  /* #f2f2f2; */
  border-radius: 16px;
  flex-direction:column; 
  padding: 5rem 5rem;
  position:relative; 
 
`;
export const InputContainer = styled.div` 
display:flex;
gap:50px;  
 margin-bottom:20px; 
    @media (max-width: 768px) {
    display:flex; 
    flex-direction:column;  
    gap:5px; 
  }
`
  