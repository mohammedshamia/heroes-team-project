import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: #000;
  background: #fff;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
    "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & h1 {
    display: inline-block;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
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

const NotFoundPage: FC = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <article>
          <h2>This page could not be found.</h2>
        </article>
      </div>
    </Wrapper>
  );
};

export default NotFoundPage;
