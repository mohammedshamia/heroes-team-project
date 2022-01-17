import {Link} from 'react-router-dom'
import styled from 'styled-components' 

interface prop {
  opacity?: string;
  width?: string;
}
export const Step = styled.span < prop>`

background-color:#FCDD06;
padding:5px 8px; 
margin: 0px 15px; 
opacity: ${props => props.opacity};
`
export const StepDisable = styled.span`
background-color:#707070;
padding:5px 8px; 
margin: 0px 15px; 
opacity:.5; 
color:white; 
`

export const Hr = styled.hr<prop>`
width: ${props => props.width || "65px"}; 
height:2px; 
background: #707070;
margin:0 10px ; 

`
export const Stepper = styled.div`
margin-top:10px; 
display:flex; 
/* width:35%; 
justify-content:space-between; */
align-items:center; 
`
export const WrapperFormAndOrder = styled.div`
  display:grid; 
 grid-template-columns: 800px 400px ;
 gap:15px; 
/* grid-template-rows: 12px 12px ; */

  `
export const WrapOrder = styled.div`
  /* margin: 70px; */
display: flex;
background-color: #f2f2f2;
border-radius: 16px;
flex-direction: column;
padding: 2rem 5rem;
`
export const LinkRouter = styled(Link)` 

color:#707070; 
letter-spacing: 0.44px;
font-size:16px; 
`
export const Title = styled.div`
display:flex; 
align-items:center; 
justify-content:space-between; 
`
export const ContentOrder =styled.div` 
display:flex; 
algin-items:center; 



`
export const ContentProduct = styled.div` 
display:flex; 
flex-direction:column; 
margin:0px 5px; 
gap:10px;  
`
export const Price = styled.div` 
display:flex; 
justify-content space-between; 
`