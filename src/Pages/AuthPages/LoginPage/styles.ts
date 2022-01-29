import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* overflow: hidden; */
`;

export const LoginImage = styled.img`
  width: 60%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
