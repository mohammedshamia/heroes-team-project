import styled from "styled-components";
import { Field } from "formik";

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
  color: #707070;
  font-size: 14px;
  width: 100%;
  background: #f2f2f2;
  outline: none;
`;

export const Label = styled.label`
  color: #707070;
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
  flex-direction: column;
  width: ${(props) => (props.fullWidth ? "100%" : props.width)};
  @media (max-width: 768px) {
    width: 100%;
  }
`;