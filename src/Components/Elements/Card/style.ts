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
  height: ${props => (props.height  || "400px")}; 
  background-color: #fff;
  border-radius: ${props => props.borderRadius|| '10px' } ;
  overflow: hidden;
  padding:1rem;
  width : ${props => props.width  }
  @media (max-width: 768px) {
  width:100%; 

  }
`;


export const Img = styled.img<IProps>`
  width: ${props => (props.width ? props.width : '300px')};
  height: ${props => (props.height ? props.height : '250px')};
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
  
  