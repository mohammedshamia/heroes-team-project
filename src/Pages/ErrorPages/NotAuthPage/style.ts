import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${(props) => props.theme.textColors.secondary};
  background: ${(props) => props.theme.background.default};
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h1 {
    display: inline-block;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    border-right: 1px solid ${(props) => props.theme.textColors.secondary};
    margin: 0;
    margin-right: 20px;
    padding: 10px 23px 10px 0;
    font-size: 24px;
    font-weight: 500;
    vertical-align: top;
  }
  & article {
    display: inline-block;
    text-align: left;
    line-height: 49px;
    height: 49px;
    vertical-align: middle;
    font-size: 14px;
    & h2 {
      font-weight: normal;
      line-height: inherit;
      margin: 0;
      padding: 0;
    }
  }
`;
