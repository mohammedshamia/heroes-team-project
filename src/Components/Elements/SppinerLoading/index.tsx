import { FC } from "react";
import { Spenner } from "./style";
import "./style.ts";

interface IProps {
  height?: string;
  width?: string;
  bgColor?: string;
}
const SppinerLoading: FC<IProps> = ({ height, width, bgColor }) => {
  return (
    <Spenner height={height} width={width} bgColor={bgColor}>
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </Spenner>
  );
};

export default SppinerLoading;
