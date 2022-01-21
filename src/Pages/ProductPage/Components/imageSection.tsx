import Container from "../../../Components/Container";
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
        <img src={ProductData[0].image} loading="lazy" />
      </Imagefirst>
      <ImageSecionSecond>
        {ProductData[0].imageSmall.map((elemnt) => (
          <ImageSmall>
            <img src={elemnt.name} loading="lazy" />
          </ImageSmall>
        ))}
      </ImageSecionSecond>
    </ImageSections>
  );
};

export default ImageSection;
