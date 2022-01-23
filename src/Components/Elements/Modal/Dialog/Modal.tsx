import React from "react";
import DialogWrapper from "./ModalWrapper/DialogWrapper";
import { Overlay } from "./Overlay/styles";
import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  fullScreen?: boolean;
  maxWidth?: string;
}

const Modal = ({ children, isOpen, onClose }: Props) => {
  return (
    <>
      {isOpen && (
        <Container>
          <DialogWrapper>
            {children}
          </DialogWrapper>
          <Overlay onClick={onClose} />
        </Container>
      )}
    </>
  );
};

export default Modal;
