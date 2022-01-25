import { IProduct } from "../../../Store/Types";
import {
  Imagefirst,
  ImageSecionSecond,
  ImageSections,
  ImageSmall,
} from "../product.style";
interface IProps {
  productById: IProduct;
}
const ImageSection = ({ productById }: IProps) => {
  return (
    <ImageSections>
      <Imagefirst>
        <img src={productById.images[0]} loading="lazy" alt="" />
      </Imagefirst>
      <ImageSecionSecond>
        {productById.images.map((elemnt: string, index) => (
          <ImageSmall key={elemnt + index}>
            <img src={elemnt} loading="lazy" alt="" />
          </ImageSmall>
        ))}
      </ImageSecionSecond>
    </ImageSections>
  );
};

export default ImageSection;
