import { Form, FormikProps } from "formik";
import { useEffect } from "react";
import { useTheme } from "styled-components";
import Button from "../../Elements/Buttons";
import ModalAction from "../../Elements/Modal/Dialog/ModalAction/ModalAction";
import Rate from "../../Elements/Rating";
import FormInput from "../Fields/inputField";
import { Errors, FlexInput, Label } from "../Fields/inputField.style";

interface IProps {
  errors?: any;
  touched?: any;
  rate: number;
  setModalDisplay?: (bool: boolean) => void;
}

const AddReviewForm = ({
  errors,
  touched,
  setModalDisplay,
  setFieldValue,
  rate,
  values,
}: IProps & FormikProps<any>) => {
  const theme = useTheme();

  useEffect(() => {
    if (rate) {
      setFieldValue("rate", rate);
    }
  }, [rate, setFieldValue]);

  return (
    <Form>
      <FlexInput>
        <Label>Write Your Review</Label>
        <FormInput
          name="description"
          errors={errors}
          touched={touched}
          type={"textarea"}
          component="textarea"
          placeholder="Review"
        />
      </FlexInput>
      <br />
      <FlexInput>
        <Label>Rate This Product</Label>
        <div style={{ padding: "1rem 0", textAlign: "center" }}>
          <Rate
            rating={values.rate}
            onRating={(num: number) => {
              setFieldValue("rate", num);
            }}
          />
          {errors["rate"] && touched["rate"] && (
            <Errors>{errors["rate"]}</Errors>
          )}
        </div>
      </FlexInput>

      <ModalAction>
        <Button
          type="submit"
          style={{ fontWeight: "bold" }}
          backgroundColor={theme.colors.primary}
        >
          Add
        </Button>
        <Button
          type="button"
          style={{ fontWeight: "bold" }}
          backgroundColor={theme.colors.error}
          onClick={() => {
            setModalDisplay && setModalDisplay(false);
          }}
        >
          Cancel
        </Button>
      </ModalAction>
    </Form>
  );
};

export default AddReviewForm;
