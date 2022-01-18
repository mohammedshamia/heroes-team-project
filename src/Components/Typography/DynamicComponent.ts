import styled from "styled-components";

interface IAttributes {
  align?: string;
  gutterBottom?: boolean;
  variant: string;
  fontWeight?: number;
}

export const Styling = styled.div<IAttributes>`
  margin-bottom: ${(props) => (props.gutterBottom ? "30px" : "0px")};

  text-align: ${(props) => props.align};

  font-weight: ${(props) => props.fontWeight};

  font-size: ${(props) => props.theme.typography[props.variant].fontSize};

  line-height: ${(props) => props.theme.typography[props.variant].lineHeight};

  letter-spacing: ${(props) =>
    props.theme.typography[props.variant].letterSpacing};

  text-transform: ${(props) =>
    props.theme.typography[props.variant].textTransform || "none"};
`;
