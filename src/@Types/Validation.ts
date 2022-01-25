export interface ICreateNewProduct {
  productName: string;
  productBrand: string;
  productCategroy: any[];
  productDiscription: string;
  productCount: number;
  productPrice: number;
  productImage: any[];
  productID: number;
  colors:any[]
}

export interface ISignUpUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface ILogInUser {
  email: string;
  password: string;
  isRememberMe?: boolean;
}

export interface IShipping {
  country: string;
  city: string;
  zipCode: string;
  streetAddress: string;
}
