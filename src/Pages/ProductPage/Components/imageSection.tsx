import { useState } from "react";
import { IProduct } from "../../../Store/Types";
import {
  Imagefirst,
  ImageSecionSecond,
  ImageSections,
  ImageSmall,
} from "../product.style";
interface IProps {
  productById?: IProduct;
}
const ImageSection = ({ productById }: IProps) => {
  const [BigImage, setBigImage] = useState("");
  return (
    <ImageSections>
      {productById?.images !== undefined && productById?.images?.length > 0 ? (
        <>
          <Imagefirst>
            <img
              src={BigImage || productById?.images[0]}
              loading="lazy"
              alt=""
            />
          </Imagefirst>
          <ImageSecionSecond>
            {productById?.images?.map((element: string, index) => (
              <ImageSmall
                key={element + index}
                onClick={() => setBigImage(element)}
              >
                <img src={element} loading="lazy" alt="" />
              </ImageSmall>
            ))}
          </ImageSecionSecond>
        </>
      ) : (
        ""
      )}
    </ImageSections>
  );
};

export default ImageSection;
