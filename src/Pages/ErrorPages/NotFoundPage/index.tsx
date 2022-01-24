import { FC } from "react";
import { Wrapper } from "./style";

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
