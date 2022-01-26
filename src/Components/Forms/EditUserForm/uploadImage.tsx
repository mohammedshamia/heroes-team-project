import { Field, FieldProps } from "formik";
import React from "react";
import Avater from "../../../Pages/ProfilePage/avater";

interface IProps {
  profileImage: any;
}
const UploadImage = (props: IProps) => {
  return (
    <Field name="profileImage">
      {({ field, form }: FieldProps) => (
        <>
          <input
            id="profileImage"
            type={"file"}
            style={{ display: "none" }}
            accept="image/*"
            onChange={(e) => {
              form.setFieldValue("profileImage", e.target.files);
            }}
          />
          <label
            htmlFor="profileImage"
            style={{ cursor: "pointer", width: "200px", height: "200px" }}
          >
            <Avater
              width={"200px"}
              height={"200px"}
              src={
                field.value
                  ? URL.createObjectURL(field.value?.[0])
                  : props.profileImage
                  ? props.profileImage
                  : "https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png"
              }
            />
          </label>
        </>
      )}
    </Field>
  );
};

export default UploadImage;
