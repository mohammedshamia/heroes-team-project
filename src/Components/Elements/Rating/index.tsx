import React, { useMemo, useState } from "react";
// import EmptyStar from "../../../Assets/EmptyStar";
import FilledStar from "../../Icons/FilledStar";
// import { Star } from './style'
interface PropRating {
  count?: number;
  rating: number;
  // color: {
  //   filled: string;
  //   unfilled: string;
  // };
  onRating: any;
}
const Rate = ({ count, rating, onRating }: PropRating) => {
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleRating = (index: number) => {
    onRating(index + 1);
    // setEmpty(5 - (index + 1))
  };

  const getColor = (index: any) => {
    if (hoverRating >= index) {
      return true;
    } else if (!hoverRating && rating >= index) {
      return true;
    }

    return false;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx, index) => (
        <FilledStar
          key={idx}
          onClick={() => handleRating(index)}
          color={getColor(idx)}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  // const endRating = useMemo(() => {
  //   return Array(empty)//2
  //     .fill(0)
  //     .map((idx, index) => (
  //       <EmptyStar key={"empty" + idx} onClick={() => handleRating(index + rating)} style={{ color: getColor(idx) }} onMouseEnter={() => setHoverRating(idx)} onMouseLeave={() => setHoverRating(0)} />
  //     ));
  // }, [count, rating, hoverRating]);

  return <div>{starRating} </div>;
};
Rate.defaultProps = {
  count: 5,
  // filled: 2,
  // empty: 5 - filled,
  rating: 0,
  // color: {
  //   filled: true,
  //   unfilled: false,
  // },
};
export default Rate;
