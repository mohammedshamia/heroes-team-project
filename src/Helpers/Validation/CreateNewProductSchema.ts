import { object, string, number, SchemaOf, array } from "yup";
import { ICreateNewProduct } from "../../@Types/Validation";
const CreateNewProductSchema = (): SchemaOf<ICreateNewProduct> => {
  return object().shape({
    name: string().required("Please Enter Product Name"),
    brand: string().required("Please Enter Product Brand"),
    categories: array()
      .of(string())
      .min(1, "Categories should be one at least")
      .max(4, "Categories max is 4")
      .required("Categories is required"),
    description: string()
      .min(5, "Too Short Product Discription!")
      .max(500, "Too Long Product Discription!")
      .required("Please Enter Product Discription"),
    countInStock: number()
      .typeError("Should be Number")
      .integer()
      .min(0, "Please Enter more than one")
      .required("Please Enter Product Number in stock"),
    price: number()
      .typeError("Should be Number")
      .integer()
      .min(0, "Please Enter more than one")
      .required("Please Enter Product Price:"),
    // images: array()
    //   .of(string())
    //   .min(1, "Images should be one at least")
    //   .max(4, "Images max is 4")
    //   .required("Images is required"),

    colors: array()
      .of(string())
      .min(1, "Colors should be one at least")
      .max(4, "Colors max is 4")
      .required("Colors is required"),
  });
};

export default CreateNewProductSchema;
