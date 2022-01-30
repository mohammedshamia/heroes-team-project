import { FC } from "react";
import { Wrapper } from "./style";

const NotAuthPage: FC = () => {
  return (
    <Wrapper>
      <div>
        <h1>401</h1>
        <article>
          <h2>You are not authorized.</h2>
        </article>
      </div>
    </Wrapper>
  );
};

export default NotAuthPage;
