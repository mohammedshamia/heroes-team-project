import { useMemo, useState } from "react";
import FilledStar from "../../Icons/Star";
interface PropRating {
  count?: number;
  rating: number;
  onRating: any;
}
const Rate = ({ count, rating, onRating }: PropRating) => {
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleRating = (index: number) => {
    onRating(index + 1);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, rating, hoverRating]);

  return <div>{starRating} </div>;
};
Rate.defaultProps = {
  count: 5,
  rating: 0,
};
export default Rate;
