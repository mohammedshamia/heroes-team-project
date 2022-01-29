import styled from "styled-components";
import { Field } from "formik";
import Select from "react-select";

export const Errors = styled.h6`
  color: red;
  font-size: 12px;
  margin: 5px;
`;
export const Input = styled(Field)`
  padding: 0.5rem 2rem;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: ${(props) => props.theme.textColors.secondary};
  font-size: 14px;
  width: 100%;
  background: ${(props) =>
    props.background ? props.background : props.theme.background.paper};

  outline: none;
`;

export const DateInputStyle = styled.input`
  padding: 0.5rem 2rem;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;

  outline: none;
`;
export const SelectInput = styled(Select)`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: ${(props) => props.theme.textColors.secondary};
  font-size: 14px;
  width: 100%;
  background: ${(props) => props.theme.background.paper};

  outline: none;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.textColors.primary};
  font-size: 16px;
  letter-spacing: 0.88px;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

interface IProps {
  fullWidth?: boolean;
  width?: string;
}
export const FlexInput = styled.div<IProps>`
  display: flex;
  position:relative;
  flex-direction: column;
  width: ${(props) => (props.fullWidth ? "100%" : props.width)};
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const Icon = styled.span` 
width:15px; 
position:absolute; 
right:5px; 
bottom:5px; 

`