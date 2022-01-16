export interface ICreateNewProduct {
  productName: string;
  productBrand: string;
  productID: number;
  productCategroy: string;
  productDiscription: string;
  productCount: number;
  productPrice: number;
  // productImage: string,
}

export interface ISignUpUser {
  userName: string;
  userEmail: string;
  password: string;
  confirmPassword: string;
}

export interface ILogInUser {
  userEmail: string;
  password: string;
  isRememberMe?: boolean
}
