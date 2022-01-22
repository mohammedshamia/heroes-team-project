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
  firstName: string
  lastName: string,
  email: string,
  password: string,
  passwordConfirmation: string
}

export interface ILogInUser {
  userEmail: string;
  password: string;
  isRememberMe?: boolean
}

export interface IShipping 
{
  country: string, 
  city :string,
  zipCode: string,
  streetAddress:string,
  

}
