import styled from "styled-components";

export const Continer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
  background-color: ${(props) => props.theme.background.paper};

  border-radius: 16px;

  padding: 5rem 5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-left: 12px;
  width: 100%;
  height: 23px;
`;

export const StripeElement = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-left: 12px;
`;
