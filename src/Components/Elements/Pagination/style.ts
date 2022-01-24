import styled from "styled-components";

interface IProps {
  current?: boolean;
}

export const Wrapper = styled.div`
  display: inline-block;
`;

export const Button = styled.button<IProps>`
  font-size: 1rem;
  font-weight: 600;
  padding: 10px 15px;
  background-color: ${(props) => (props.current ? "#FCDD06" : "#F2F2F2")};
  border: 1px solid #123;
  transition: all 0.2s;
  border-collapse: collapse;
`;
