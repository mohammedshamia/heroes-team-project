import { object, ref, string, boolean, date, number, SchemaOf } from 'yup';
import { ICreateNewProduct } from "../../@Types/Validation"
const CreateNewProductSchema = (): SchemaOf<ICreateNewProduct> => {
    return object().shape({
        productName: string().required("Please Enter Product Name"),
        productBrand: string().required("Please Enter Product Brand"),
        productCategroy: string().required("Please Enter Product Category"),
        productDiscription: string().min(20, "Too Short Product Discription!")
            .max(150, "Too Long Product Discription!").required("Please Enter Product Discription"),
        productCount: number()
            .typeError("Should be Number")
            .integer()
            .min(0, "Please Enter more than one")
            .required("Please Enter Product Number in stock"),
        productPrice: number()
            .typeError("Should be Number")
            .integer()
            .min(0, "Please Enter more than one")
            .required("Please Enter Product Price:"),
        // productImage: string().required("Please Enter Product Image"),
        productID: number()
            .typeError("Should be Number")
            .integer()
            .min(0, "Please Enter more than one")
            .required("Please Enter Product ID"),
    });
};

export default CreateNewProductSchema;