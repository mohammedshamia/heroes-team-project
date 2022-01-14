import styled from 'styled-components'
import { ButtonProp } from './interface'

export const IButton = styled.button <ButtonProp>`
color:${props => props.color || "black"};; 
background-color: ${props => props.backgroundColor || "#f2f2f2"}; 
padding: ${props => props.padding || "12px 65px"} ; 
border:none;
border-radius:10px; 
border: ${props => props?.border || null };
margin:${props => props?.margin || null};
  outline: none;
  cursor: pointer;


`