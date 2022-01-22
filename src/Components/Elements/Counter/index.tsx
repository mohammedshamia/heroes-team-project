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
        borderHover={`1px solid ${theme.colors.primary}`}
        border={`1px solid  ${theme.colors.primary}`}
        borderRaduies={"0px"}
        padding={"0rem 1rem "}
        onClick={decrement}
        backgroundColor={`${theme.background.default}`}
        type="button"
        fontSize={"14px"}
        colorHover={theme.common.black}
        color={theme.textColors.counterColor}
      >
        -
      </Button>

      <CounterDiv>{count}</CounterDiv>
      <Button
        bold={true}
        borderHover={`1px solid ${theme.colors.primary}`}
        border={`1px solid  ${theme.colors.primary}`}
        borderRaduies={"0px"}
        padding={"0rem 1rem"}
        backgroundColor={`${theme.background.default}`}
        type="button"
        fontSize={"14px"}
        colorHover={theme.common.black}
        color={theme.textColors.counterColor}
        onClick={increment}
      >
        +
      </Button>
    </ContainerCounter>
  );
};

export default Counter;
