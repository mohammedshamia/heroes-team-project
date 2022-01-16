import styled from 'styled-components';

interface IProps {
  width?: string;
  height?: string;
  borderRadius?: string;
}

export const CardSection = styled.div<IProps>`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items:center; 
  gap:5px; 
  background-color:pink;  
  height: ${props => (props.height  || "300px")}; 
  background-color: #fff;
  border-radius: ${props => props.borderRadius } ;
  overflow: hidden;
  /* width: 33.26%; */
  width : ${props => props.width  }
  @media (max-width: 768px) {
  width:100%; 
  }
`;


export const Img = styled.img<IProps>`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '50%')};
  object-fit:cover;
  position:relative; 
  top:0;

`;
export const ContainerButton = styled.div`
display:flex;
/* align-items:center;
justify-content:center;  */
/* gap:10px;  */
`
  
export const ContainerShopping = styled.div`
background-color: #F2F2F2; 
display:flex; 
/* padding: 15px 30px;  */
margin:30px; 
align-items:center; 
justify-content:space-between; 
position: relative;
border-radius:16px; 
  @media (max-width: 768px) {
  display:flex; 
  flex-direction:column; 
  gap:3px; 
  }
  &:hover 
  {
    box-shadow:0px 4px 8px #00000017;
  }
`
export const ContainerClose = styled.div`
position: absolute; 
/* left:0; 
top:10%; */
right:20px; 
top: 10px; 

`
  