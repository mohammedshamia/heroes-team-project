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
      <Imagefirst>
        <img src={ProductData[0].image} />
      </Imagefirst>
      <ImageSecionSecond>
        {ProductData[0].imageSmall.map((elemnt) => (
          <ImageSmall>
            <img src={elemnt.name} />
          </ImageSmall>
        ))}
      </ImageSecionSecond>
    </ImageSections>
  );
};

export default ImageSection;
