import {Link} from 'react-router-dom'
import styled from 'styled-components' 

interface prop {
  opacity?: string;
  width?: string;
  Grid?:string; 
}
export const WrapperReviewPage = styled.div` 
 margin:10px 60px; 

`
export const Step = styled.span < prop>`

background-color:#FCDD06;
padding:5px 8px; 
margin: 0px 15px; 
cursor:pointer; 
&:hover 
{
  background-color:#FCDD06;
}
opacity: ${props => props.opacity};
`
export const StepDisable = styled.span`
background-color:#707070;
padding:5px 8px; 
margin: 0px 15px; 
opacity:.5; 
color:white; 
cursor:pointer; 

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
align-items:center; 
`
export const WrapperFormAndOrder = styled.div <prop>`
  display:grid; 
 grid-template-columns:  ${props => props.Grid || "700px 400px "};

 gap:15px; 
 margin:10px; 
  
@media (max-width: 768px) {
    display:flex; 
    flex-direction: column;
    /* padding: 1rem; */
  }

  `
export const WrapOrder = styled.div`

display: flex;
background-color: #f2f2f2;
border-radius: 16px;
flex-direction: column;
padding: 2rem 5rem;
position:relative; 
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
export const ContentOrderDetails =styled.div` 
/* display:flex; 
algin-items:center;  */

display:flex; 
gap:10px; 
align-items:center;
margin-bottom:10px; 

/* algin-items:center; */

`
export const ContentProduct = styled.div` 
/* display:flex;  */
/* flex-direction:column;  */
/* margin:0px 5px;  */
/* gap:10px;   */
`
export const Price = styled.div` 
display:flex; 
justify-content: space-between; 
margin-top:2px; 
`

export const ContentPlaceOrder = styled.div`
background: #F2F2F2;
border-radius:16px; 
padding: 2.5rem 3rem; 
margin: 5px 10px; 

`  

export const ContentDetailsPlaceOrder = styled.div`
background: #F2F2F2;
height:30vh; 
border-radius:16px; 
padding: 2.5rem 3rem; 

` 
export const ContainerOrderDetails = styled.div`
display:flex; 
flex-direction:column; 
align-items:center;
/* gap:10px; */
 `
export const PositionButton = styled.div`  
position:absolute;
bottom:0; 
 right:0;

 `    