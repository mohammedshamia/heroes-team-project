import { Form } from "formik";
import styled from "styled-components";

export const FormUser = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.background.paper};
  border-radius: 16px;
  padding: 2rem 3rem;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const UserDetails = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media (max-width: 800px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

export const FormProductInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FlexButon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const Continer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const CenterImage = styled.div`
  display: flex;
  justify-content: center;
 
`;
