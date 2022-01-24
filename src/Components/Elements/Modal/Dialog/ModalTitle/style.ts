import styled from "styled-components";

interface Props {
  styles?: {};
}
export const Title = styled("h2")<Props>`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  padding: 10px 0;
  width: 100%;
`;
