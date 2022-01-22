//products interfaces
export interface Review {
  rating: number;
  comment: string;
}

export interface Icategories {
  name: string;
  image: string;
}

export interface IAllCategories {
  categories:Icategories[]
}


export interface IProduct {
  _id: string;
  images: string[];
  colors: string[];
  categories: string[];
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  description: string;
  discount: number;
  brand: string;
  name: string;
  reviews: Review[];
  user: string;
  createdAt: string;
  updatedAt: string;
}
export interface IproductsByPaginate {
  products: IProduct[];
  page: number;
  pages: number;
}

export interface IProductsSliceState {
  productsByPaginate: IproductsByPaginate;
  productsByTopThree: IProduct[];
  categories: Icategories[];
  productById: IProduct | null;
  loading: boolean;
}

//interface for user
export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  profileImage: string;
  dateOfBirth: string;
  isAdmin: boolean;
  cart?: {
    items: [
      {
        items: any[];
        totalQty: number;
        totalPrice: number;
      }
    ];
  };
  token?: string;
}

//interface for State
export interface IUserSliceState {
  data: IUser | null;
  auth: boolean | null;
  loading: boolean;
}
