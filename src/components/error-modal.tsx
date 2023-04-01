import React from "react";
import { ModalProps } from "../types/types";

export const Modal = (props: ModalProps) => {
  if (!props.isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content underline">
        <h2>Error</h2>
        <p className="underline">{props.message}</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};
