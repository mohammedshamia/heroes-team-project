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
  User,
  Label,
} from "./style";
import { useEffect, useState } from "react";

import { IEditUserValues } from "./interface";
import DateInput from "../Fields/Date/DateInput";
import FieldDate from "../Fields/Date/FieldDate";
import UploadImage from "../../UploadImage";
import Avater from "../../../Pages/ProfilePage/avater";
import AlertMessage from "../../Elements/Alert";

interface OtherProps {
  data?: IEditUserValues;
}

const FormEditProduct = (props: OtherProps & FormikProps<IEditUserValues>) => {
  const [error, setError] = useState("");
  const { errors, touched, setFieldValue, data, values } = props;

  useEffect(() => {
    if (data) {
      setFieldValue("firstName", data.firstName);
      setFieldValue("lastName", data.lastName);
      setFieldValue("email", data.email);
      setFieldValue("profileImage", data.profileImage);
      setFieldValue("dateOfBirth", data.dateOfBirth.split("T")[0]);
      setFieldValue("isAdmin", data.isAdmin);
    }
  }, []);
  const onImageChange = (image: string) => {
    setFieldValue("profileImage", image);
  };

  return (
    <Form>
      <Continer>
        <FormUser>
          <Typography variant="h6">User Details</Typography>
          <UserDetails>
            <User>
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
                  label={"Email"}
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
              <FormProductInputGroup>
                <Label>
                  <Field type="checkbox" name="isAdmin" />
                  {"  "}isAdmin
                </Label>
              </FormProductInputGroup>
            </User>
            <CenterImage>
              <Typography style={{ textAlign: "center" }}>
                Profile Image
              </Typography>
              <AlertMessage type="error">{error}</AlertMessage>
              <UploadImage
                setError={setError}
                width="200px"
                height="200px"
                bg={values?.profileImage}
                setImage={(e: any) => {
                  onImageChange(e);
                }}
              >
                <Avater
                  width="200px"
                  height="200px"
                  src={
                    values?.profileImage.length
                      ? values?.profileImage
                      : "Assets/profile.png"
                  }
                />
              </UploadImage>
            </CenterImage>
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
