import React, { useEffect, useState } from "react";
import Button from "../Buttons";
import { ContainerCounter, CounterDiv } from "./counter.style";
import { useTheme } from "styled-components";
import { useAppDispatch } from "../../../Store/configureStore";
import { addItemToCart } from "../../../Store/Slices/user";
import { ButtonProp } from "../Buttons/interface";
interface IPropsCounter {
  counter: number;
  setCounter?: Function | boolean | undefined;
  onClick?: any;
}

const Counter: React.FC<IPropsCounter> = (props: IPropsCounter) => {
  const { setCounter, counter } = props;
  const dispatch = useAppDispatch();

  // console.log(setCounter)
  const [count, setstateCount] = useState(counter);
  const theme = useTheme();
  const increment = () => {
    setstateCount((prev: number) => prev + 1);
  };
  const handleIncrease = (id: string, qty: number) => {
    dispatch(addItemToCart({ productId: id, qty: qty }));
    // console.log("add")
  };
  const decrement = () => {
    if (count === 0) return setstateCount(0);
    else setstateCount((prev: number) => prev - 1);
  };

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
        onClick={handleIncrease}
      >
        +
      </Button>
    </ContainerCounter>
  );
};

export default Counter;
