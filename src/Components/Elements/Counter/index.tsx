import React, { useEffect, useState } from "react";
import Button from "../Buttons";
import { ContainerCounter, CounterDiv } from "./counter.style";
import { useTheme } from "styled-components";
interface IPropsCounter {
  counter: number;
  setCounter: Function;
}

const Counter: React.FC<IPropsCounter> = (props: IPropsCounter) => {
  const { setCounter, counter } = props;
  const [count, setstateCount] = useState(counter);
  const theme = useTheme();
  const increment = () => {
    setstateCount((prev: number) => prev + 1);
  };

  const decrement = () => {
    if (count === 0) return setstateCount(0);
    else setstateCount((prev: number) => prev - 1);
  };
  useEffect(() => {
    setCounter(count);
  }, [count]);

  return (
    <ContainerCounter>
      <Button
        bold={true}
        borderHover={` 1px solid  ${theme.colors.primary}`}
        border={` 1px solid  ${theme.textColors.secondary}`}
        borderRaduies={"0px"}
        padding={"0rem .8rem "}
        onClick={decrement}
        backgroundColor={`${theme.background.default}`}
        type="submit"
        fontSize={"14px"}
        colorHover={`${theme.common.black}`}
        color={`${theme.textColors.secondary}`}
      >
        -
      </Button>

      <CounterDiv>{count}</CounterDiv>
      <Button
        bold={true}
        borderHover={` 1px solid  ${theme.colors.primary}`}
        border={` .8px solid  ${theme.textColors.secondary}`}
        borderRaduies={"0px"}
        padding={"0rem .8rem "}
        onClick={increment}
        backgroundColor={`${theme.background.default}`}
        type="submit"
        fontSize={"14px"}
        colorHover={`${theme.common.black}`}
        color={`${theme.textColors.secondary}`}
      >
        +
      </Button>
    </ContainerCounter>
  );
};

export default Counter;
