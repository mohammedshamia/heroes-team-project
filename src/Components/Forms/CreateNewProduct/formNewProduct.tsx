import { Field, Form, FormikProps } from "formik";
import Button from "../../Elements/Buttons";
import Typography from "../../Typography";
import FormInput from "../Fields/inputField";
import {
  ProductDetails,
  FormProductInputGroup,
  FormProduct,
  ProductImage,
  FlexButon,
  ProductImageUploadGroup,
  ProductImageUpload,
  ProductImageUploadGroupButton,
  Continer,
} from "./newProduct.style";
import CustomSelect from "../Fields/customSelect";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../../Store/configureStore";
import { getAllcategories } from "../../../Store/Slices/products";
import Upload from "../../Icons/Upload";
import CloseIcon from "../../Icons/CloseIcon";
import UploadImage from "../../UploadImage";
import { ICreateNewProduct } from "../../../@Types/Validation";

interface OtherProps {
  isEditing: boolean;
  data?: any;
}
const FormNewProduct = (props: OtherProps & FormikProps<ICreateNewProduct>) => {
  const {
    errors,
    touched,
    setFieldValue,
    isEditing,
    data,
    submitForm,
    values,
  } = props;
  // console.log(values);
  const dispatch = useAppDispatch();
  let { categories } = useSelector(
    (state: RootState) => state.entities.products
  );
  let categoriesArray: { label: string; value: string }[] = [];
  const colorsArray = [
    { label: "Red", value: "Red" },
    { label: "Brown", value: "Brown" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Blue" },
    { label: "Black", value: "Black" },
    { label: "White", value: "White" },
  ];

  useEffect(() => {
    dispatch(getAllcategories());
    if (isEditing && data) {
      setFieldValue("images", data.images);
      setFieldValue("name", data.name);
      setFieldValue("brand", data.brand);
      setFieldValue("countInStock", data.countInStock);
      setFieldValue("categories", data.categories);
      setFieldValue("description", data.description);
      setFieldValue("price", data.price);
      setFieldValue("colors", data.colors);
    }
  }, [data, dispatch, isEditing, setFieldValue]);

  if (categories.length > 0) {
    categories.map((ele) =>
      categoriesArray.push({ label: ele.name, value: ele.name })
    );
  }
  const onImageChange = (image: string, index: number) => {
    let array = new Array(4);
    array = [...values.images];
    array[index] = image;
    setFieldValue("images", array);
  };
  return (
    <Form>
      <Continer>
        <FormProduct>
          <ProductImage>
            <ProductImageUpload>
              <UploadImage
                bg={values?.images[0]}
                setImage={(e: any) => {
                  onImageChange(e, 0);
                }}
              >
                {!isEditing ? <Upload /> : <CloseIcon fill={"#fff"} />}
              </UploadImage>
            </ProductImageUpload>
            <ProductImageUploadGroup>
              <ProductImageUploadGroupButton>
                <UploadImage
                  bg={values?.images[1]}
                  setImage={(e: any) => {
                    onImageChange(e, 1);
                  }}
                >
                  <Typography>+</Typography>
                </UploadImage>
              </ProductImageUploadGroupButton>
              <ProductImageUploadGroupButton>
                <UploadImage
                  bg={values?.images[2]}
                  setImage={(e: any) => {
                    onImageChange(e, 2);
                  }}
                >
                  <Typography>+</Typography>
                </UploadImage>
              </ProductImageUploadGroupButton>{" "}
              <ProductImageUploadGroupButton>
                <UploadImage
                  bg={values?.images[3]}
                  setImage={(e: any) => {
                    onImageChange(e, 3);
                  }}
                >
                  <Typography>+</Typography>
                </UploadImage>
              </ProductImageUploadGroupButton>
            </ProductImageUploadGroup>
          </ProductImage>
          <ProductDetails>
            <Typography variant="h6">Product Details</Typography>
            <FormProductInputGroup>
              <FormInput
                type="input"
                name={"name"}
                placeholder={"Product Name"}
                touched={touched}
                errors={errors}
                label={"Product Name"}
                fullWidth={false}
                width={"45%"}
              />
              <FormInput
                type="input"
                name={"brand"}
                placeholder={"Product Brand"}
                touched={touched}
                errors={errors}
                label={"Product Brand"}
                fullWidth={false}
                width={"45%"}
              />
            </FormProductInputGroup>
            <FormProductInputGroup>
              <Field
                name="colors"
                options={colorsArray}
                component={CustomSelect}
                placeholder="Select multi colors..."
                isMulti={true}
                touched={touched}
                errors={errors}
                label={"Product colors"}
                fullWidth={false}
                width={"45%"}
              />

              <Field
                name="categories"
                options={categoriesArray}
                component={CustomSelect}
                placeholder="Select multi Categroy..."
                isMulti={true}
                touched={touched}
                errors={errors}
                label={"Product Categroy"}
                fullWidth={false}
                width={"45%"}
              />
            </FormProductInputGroup>
            <FormProductInputGroup>
              <FormInput
                component="textarea"
                name={"description"}
                placeholder={"Product Discription"}
                touched={touched}
                errors={errors}
                label={"Product Discription"}
                fullWidth={false}
                width={"100%"}
              />
            </FormProductInputGroup>
            <FormProductInputGroup>
              <FormInput
                type="input"
                name={"countInStock"}
                placeholder={"Count In Stock"}
                touched={touched}
                errors={errors}
                label={"Count In Stock"}
                fullWidth={false}
                width={"31%"}
              />
              <FormInput
                type="input"
                name={"discount"}
                placeholder={"Discount"}
                touched={touched}
                errors={errors}
                label={"Discount"}
                fullWidth={false}
                width={"31%"}
              />
              <FormInput
                type="input"
                name={"price"}
                placeholder={"Product Price"}
                touched={touched}
                errors={errors}
                label={"Product Price"}
                fullWidth={false}
                width={"31%"}
              />
            </FormProductInputGroup>
          </ProductDetails>
        </FormProduct>
        <FlexButon>
          <Button
            padding={"1rem 3rem"}
            bold={false}
            backgroundColor="#4BB543"
            color={"#FFFFFF"}
            fontSize={"14px"}
            borderRaduies={"4px"}
            type="submit"
          >
            {isEditing ? "Update Product" : " Create New Product"}
          </Button>
        </FlexButon>
      </Continer>
    </Form>
  );
};

export default FormNewProduct;
