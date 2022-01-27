import { Form } from "formik";
import { useTheme } from "styled-components";
import Button from "../../Elements/Buttons";
import ModalAction from "../../Elements/Modal/Dialog/ModalAction/ModalAction";
import FormInput from "../Fields/inputField";
import { FlexInput, Label } from "../Fields/inputField.style";

interface IProps {
  errors?: any;
  touched?: any;
  setModalDisplay?: (bool: boolean) => void;
}

const AddReviewForm = ({ errors, touched, setModalDisplay }: IProps) => {
  const theme = useTheme();

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
