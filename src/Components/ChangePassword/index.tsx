import React, { useState } from "react";
import { useTheme } from "styled-components";
import Button from "../Elements/Buttons";
import Modal from "../Elements/Modal/Dialog/Modal";
import ModalAction from "../Elements/Modal/Dialog/ModalAction/ModalAction";
import ModalContent from "../Elements/Modal/Dialog/ModalContent/ModalContent";
import ModalTitle from "../Elements/Modal/Dialog/ModalTitle/ModalTitle";
import ChangePasswordForm from '../Forms/ChangePassword/index'

interface IProps{
  modalDisplay: boolean,
  setModalDisplay: (bool: boolean)=> void
}

const ChangePassword = ( {modalDisplay, setModalDisplay}: IProps ) => {
  

  return (
    <>
      {modalDisplay && (
        <Modal isOpen={modalDisplay} onClose={() => setModalDisplay(false)}>
          <ModalTitle>
            <h4>Update Password</h4>
          </ModalTitle>
          <ModalContent>
            <ChangePasswordForm setModalDisplay={setModalDisplay} />
          </ModalContent>
          
        </Modal>
      )}
    </>
  );
};

export default ChangePassword;
