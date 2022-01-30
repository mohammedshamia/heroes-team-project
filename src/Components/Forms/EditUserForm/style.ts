import { Form } from "formik";
import styled from "styled-components";

export const FormUser = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background.paper};
  border-radius: 16px;
  padding: 2rem 3rem;
  width: 100%;
}
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-top: 4rem;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
    align-items: center;
    align-self: center;
    padding-top: 1rem;
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

export const CenterImage = styled.div``;
export const User = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
export const Label = styled.label`
  color: ${(props) => props.theme.textColors.primary};
  font-size: 16px;
  padding:1rem;
  letter-spacing: 1px;;
`;
