import React, { FunctionComponent, ReactNode } from "react";
import ReactModal from "react-modal";
import { colors, shadow } from "../constants/style";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
};

export const Modal: FunctionComponent<Props> = ({
  isOpen,
  closeModal,
  children,
}) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={closeModal}
    style={customModalStyle}
  >
    {children}
  </ReactModal>
);

const customModalStyle = {
  overlay: {
    backgroundColor: "transparent",
  },
  content: {
    border: "none",
    borderRadius: 6,
    backgroundColor: colors.surfaceDarker,
    color: "lightsteelblue",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    boxShadow: shadow.l,
  },
};
