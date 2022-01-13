import React, { useMemo, useState } from "react";
import { Star } from './style'
interface PropRating {
  count: number,
  rating: number,
  color: {
    filled: string,
    unfilled: string
  }

}
const Rate = ({ count, rating, color, onRating }: PropRating) => {
  const [hoverRating, setHoverRating] = useState<number>(0);

  const getColor = (index: any) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <Star
          key={idx}
          onClick={() => onRating(idx)}
          className="cursor-pointer"
          style={{ color: getColor(idx) }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}

        >&#9733;</Star>
      ));
  }, [count, rating, hoverRating]);

  return <div>{starRating}</div>;
};
Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#f5eb3b",
    unfilled: "#DCDCDC",
  },
};
export default Rate;