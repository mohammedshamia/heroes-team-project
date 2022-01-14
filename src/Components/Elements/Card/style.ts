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
  /* width: ${props => (props.width ? props.width : '550px')}; 
  height: ${props => (props.height ? props.height : '400px')}; */
  background-color: #fff;
  border-radius: ${props => props.borderRadius && "16px"} ;
  overflow: hidden;
  width: 33.26%;
  @media (max-width: 768px) {
  width:100%; 
  }
`;


export const Img = styled.img<IProps>`
  width: ${props => (props.width ? props.width : '100px')};
  height: ${props => (props.height ? props.height : '50%')};
  object-fit:cover;
  position:relative; 
  top:0;

`;
export const ContainerButton = styled.div`
display:flex;
align-items:center;
`
  
  