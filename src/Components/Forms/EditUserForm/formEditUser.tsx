import { Field, FieldProps, Form, FormikProps } from "formik";
import Button from "../../Elements/Buttons";
import Typography from "../../Typography";
import FormInput from "../Fields/inputField";
import {
  FormProductInputGroup,
  FlexButon,
  Continer,
  FormUser,
  UserDetails,
  CenterImage,
} from "./style";
import CustomSelect from "../Fields/customSelect";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../../Store/configureStore";
import { useParams } from "react-router-dom";
import { getUserDetail } from "../../../Store/Slices/user";
import { IEditUserValues } from "./interface";
import DateInput from "../Fields/Date/DateInput";
import FieldDate from "../Fields/Date/FieldDate";
import Avater from "../../../Pages/ProfilePage/avater";
import UploadImage from "./uploadImage";
interface OtherProps {
  data?: IEditUserValues;
}

const FormEditProduct = (props: OtherProps & FormikProps<IEditUserValues>) => {
  const { errors, touched, setFieldValue, data } = props;

  useEffect(() => {
    if (data) {
      console.log(1);

      setFieldValue("firstName", data.firstName);
      setFieldValue("lastName", data.lastName);
      setFieldValue("email", data.email);
      // setFieldValue("profileImage", data.profileImage);
      setFieldValue("dateOfBirth", data.dateOfBirth.split("T")[0]);
    }
  }, []);

  return (
    <Form>
      <Continer>
        <FormUser>
          <UserDetails>
            <Typography variant="h6">User Details</Typography>
            <CenterImage>
              <UploadImage profileImage={data && data.profileImage} />
            </CenterImage>
            <FormProductInputGroup>
              <FormInput
                type="input"
                name={"firstName"}
                placeholder={"First Name"}
                touched={touched}
                errors={errors}
                label={"First Name"}
                fullWidth={false}
                width={"45%"}
              />
              <FormInput
                type="input"
                name={"lastName"}
                placeholder={"Last Name "}
                touched={touched}
                errors={errors}
                label={"Last Name"}
                fullWidth={false}
                width={"45%"}
              />
            </FormProductInputGroup>
            <FormProductInputGroup>
              <FormInput
                type="email"
                name={"email"}
                placeholder={"Email"}
                touched={touched}
                errors={errors}
                label={"First Name"}
                fullWidth={false}
                width={"45%"}
              />

              <FieldDate
                component={DateInput}
                name={"dateOfBirth"}
                placeholder={" Date of Birth"}
                touched={touched}
                errors={errors}
                label={"Date of Birth"}
                fullWidth={false}
                width={"45%"}
              />
            </FormProductInputGroup>
          </UserDetails>
        </FormUser>
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
            {"Update User"}
          </Button>
        </FlexButon>
      </Continer>
    </Form>
  );
};

export default FormEditProduct;
