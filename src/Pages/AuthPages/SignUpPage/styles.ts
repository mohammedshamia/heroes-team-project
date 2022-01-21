import styled from "styled-components";

export const SignupContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const SignupImage = styled.img`
  width: 60%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
