import styled from "styled-components";
import { Field} from "formik";

export const Errors = styled.h6`
    color: red;
    font-size: 12px;
    margin: 5px;
  `
  export const Input = styled(Field)`
  padding: .25rem;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  `