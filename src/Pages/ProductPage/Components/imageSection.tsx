import Container from "../../../Components/Container";
import { IProduct } from "../../../Store/Types";
import { IProductData } from "../interface";
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
        <img src={productById.images[0]} loading="lazy" />
      </Imagefirst>
      <ImageSecionSecond>
        {/* {ProductData[0].imageSmall.map((elemnt) => (
          <ImageSmall>
            <img src={elemnt.name} loading="lazy" />
          </ImageSmall>
        ))} */}
      </ImageSecionSecond>
    </ImageSections>
  );
};

export default ImageSection;
