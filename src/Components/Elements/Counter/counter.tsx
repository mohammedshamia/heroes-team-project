import { ButtonGroup, Button, ButtonProps } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { ContainerCounter, CounterDiv } from "./counter.stlyle";

interface IPropsCounter {
  counter: number;
  setCounter: Function;
}

const Counter: React.FC<IPropsCounter> = (props: IPropsCounter) => {
  const { setCounter, counter } = props;
  const increment = () => {
    setCounter((prev: number) => prev + 1);
  };

  const decrement = () => {
    if (counter === 0) return setCounter(0);
    else setCounter((prev: number) => prev - 1);
  };


  return (
    <ContainerCounter>
      <ButtonGroup size="sm">
        <Button variant="light" onClick={increment}>
          {" "}
          +
        </Button>
        <CounterDiv>{counter}</CounterDiv>
        <Button variant="light" onClick={decrement}>
          {" "}
          -
        </Button>
      </ButtonGroup>
    </ContainerCounter>
  );
};

export default Counter;