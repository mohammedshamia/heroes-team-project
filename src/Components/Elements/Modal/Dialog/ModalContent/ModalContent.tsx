import React from "react";
import { DialogChildren } from "./styles";

const ModalContent = ({ children }: { children: React.ReactNode }) => {
  return <DialogChildren>{children}</DialogChildren>;
};

export default ModalContent;

// <Dialog />
// <DialogActions />
// <DialogContent />
// <DialogContentText />
// <DialogTitle />
// <Slide />
