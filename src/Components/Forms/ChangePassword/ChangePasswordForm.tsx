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

const ChangePasswordForm = ({ errors, touched, setModalDisplay }: IProps) => {
  const theme = useTheme();

  return (
    <Form>
      {/* <FlexInput>
        <Label>Enter your current password </Label>
        <FormInput
          name="password"
          errors={errors}
          touched={touched}
          type={"password"}
        />
      </FlexInput> */}
      <FlexInput>
        <Label>Enter your new password</Label>
        <FormInput
          name="newPassword"
          errors={errors}
          touched={touched}
          type={"password"}
        />
      </FlexInput>
      <FlexInput>
        <Label>Confirm your new password</Label>
        <FormInput
          name="newPasswordConfirmation"
          errors={errors}
          touched={touched}
          type={"password"}
        />
      </FlexInput>

      <ModalAction>
        <Button
          type="submit"
          style={{ fontWeight: "bold" }}
          backgroundColor={theme.colors.primary}
        >
          Update
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

export default ChangePasswordForm;
