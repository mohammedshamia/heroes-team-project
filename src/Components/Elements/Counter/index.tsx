import React, { useEffect, useState } from "react";
import Button from "../Buttons";
import { ContainerCounter, CounterDiv } from "./counter.style";
import { useTheme } from "styled-components";
import { useAppDispatch } from "../../../Store/configureStore";
import { addItemToCart } from "../../../Store/Slices/user";
import { ButtonProp } from "../Buttons/interface";
interface IPropsCounter {
  counter: number;
  // setCounter: Function ;
  productId?: string | undefined  ; 
}

const Counter: React.FC<IPropsCounter> = (props: IPropsCounter) => {
  const dispatch = useAppDispatch();
// console.log(props)
    const { counter ,productId} = props;
  // const [count, setCount] = useState(counter);
  const theme = useTheme();
  const increment = () => {
    // setCount((prev: number) => prev + 1);
    //  console.log(count)
     if(productId)
   {  dispatch(addItemToCart({  productId, qty: counter+1 }))}
  };
  
  const decrement = () => {
    // if (count === 0) return setCount(0);
    // else setCount((prev: number) => prev - 1);
  };
  // useEffect(() => {

  //        if(productId)
  //  {  dispatch(addItemToCart({  productId, qty: count }))}
  // }, [count]);

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

      <CounterDiv>{counter}</CounterDiv>
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
        onClick={() => increment()}

      >
        +
      </Button>
    </ContainerCounter>
  );
};

export default Counter;
