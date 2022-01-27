import Modal from "../Elements/Modal/Dialog/Modal";
import ModalContent from "../Elements/Modal/Dialog/ModalContent/ModalContent";
import ModalTitle from "../Elements/Modal/Dialog/ModalTitle/ModalTitle";
import ChangePasswordForm from "../Forms/ChangePassword/index";

interface IProps {
  modalDisplay: boolean;
  setModalDisplay: (bool: boolean) => void;
}

const ChangePassword = ({ modalDisplay, setModalDisplay }: IProps) => {
  return (
    <>
      {modalDisplay && (
        <Modal isOpen={modalDisplay} onClose={() => setModalDisplay(false)}>
          <ModalTitle>Update Password</ModalTitle>
          <ModalContent>
            <ChangePasswordForm setModalDisplay={setModalDisplay} />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default ChangePassword;
