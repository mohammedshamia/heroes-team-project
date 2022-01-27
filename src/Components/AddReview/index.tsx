import Modal from "../Elements/Modal/Dialog/Modal";
import ModalContent from "../Elements/Modal/Dialog/ModalContent/ModalContent";
import ModalTitle from "../Elements/Modal/Dialog/ModalTitle/ModalTitle";
import AddReviewForm from "../Forms/AddReviewForm";
// import ChangePasswordForm from "../Forms/ChangePassword/index";

interface IProps {
  modalDisplay: boolean;
  setModalDisplay: (bool: boolean) => void;
  rate: number;
  productId: string;
}

const AddReview = ({
  modalDisplay,
  setModalDisplay,
  rate,
  productId,
}: IProps) => {
  return (
    <>
      {modalDisplay && (
        <Modal isOpen={modalDisplay} onClose={() => setModalDisplay(false)}>
          <ModalTitle>Add Review</ModalTitle>
          <br />
          <ModalContent>
            <AddReviewForm
              productId={productId}
              rate={rate}
              setModalDisplay={setModalDisplay}
            />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default AddReview;
