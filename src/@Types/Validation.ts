export interface IAddReview {
  description: string;
  rate: number;
}
export interface ICreateNewProduct {
  images: any[];
  colors: any[];
  categories: any[];
  price: number;
  countInStock: number;
  name: string;
  description: string;
  brand: string;
  discount?: number;
}

export interface IEditUser {
  firstName: string;
  lastName: string;
  email: string;
  profileImage?: string;
  dateOfBirth: Date;
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

export interface IChangePassword {
  // password: string;
  newPassword: string;
  newPasswordConfirmation: string;
}
