import { IProductData } from "../interface";
import {
  Imagefirst,
  ImageSecionSecond,
  ImageSections,
  ImageSmall,
} from "../product.style";
interface IProps {
  ProductData: IProductData[];
}
const ImageSection = ({ ProductData }: IProps) => {
  return (
    <ImageSections>
      <Imagefirst src={ProductData[0].image} />
      <ImageSecionSecond>
        {ProductData[0].imageSmall.map((elemnt) => (
          <ImageSmall src={elemnt.name} />
        ))}
      </ImageSecionSecond>
    </ImageSections>
  );
};

export default ImageSection;
