import Button from "../Buttons";
import { ContainerCounter, CounterDiv } from "./counter.style";
import { useTheme } from "styled-components";
import { useAppDispatch } from "../../../Store/configureStore";
import { addItemToCart } from "../../../Store/Slices/user";
interface IPropsCounter {
  counter: number;
  productId?: string | undefined;
}

const Counter: React.FC<IPropsCounter> = (props: IPropsCounter) => {
  const dispatch = useAppDispatch();
  const { counter, productId } = props;
  const theme = useTheme();
  const increment = () => {
    if (productId) {
      dispatch(addItemToCart({ productId, qty: counter + 1 }));
    }
  };

  const decrement = () => {
    if (productId) {
      dispatch(addItemToCart({ productId, qty: counter - 1 }));
    }
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
