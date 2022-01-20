import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Wrapper = styled.div` 
display: grid;  
width: 90%;
gap: 10px; 
@media (max-width: 768px) {

width:100%; 
}

`
export const WrapperSubTotal = styled.div` 
background-color:  ${props => props.theme.background.paper }; 
height:250px; 
border-radius:16px; 
display:flex; 
gap:15px; 
flex-direction:column; 
align-items: center;
 padding: 1rem 2rem; 
@media (max-width: 768px) {

width:100%;


}

`

export const LinkBack = styled(Link)`
  list-style: none;
  text-decoration: none;
  color:   ${props => props.theme.textColors.secondary };
  font-size: 15px;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

export const TitleLink = styled.div`
  padding: 1rem 0rem;
`;
export const Parent = styled.div` 

display:flex; 
gap:10px; 
@media (max-width: 768px) {

  display:flex; 
  flex-direction:column; 
}
`