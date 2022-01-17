interface IimageSmall {
  name: string;
}

interface IColor {
  name: string;
}
interface ISize {
  name: string;
}
interface IHeader {
  title: string;
  name: string;
}
export interface IProductData {
  name: string;
  image: string;
  imageSmall: IimageSmall[];
  color: IColor[];
  size: ISize[];
  text: string;
  price: number;
  header: any[];
  body: any[];
  reviews: any[];
}
