import React from "react";
import { useSelector } from "react-redux";
import BackDrop from "./backDrop";

const Modal = ({ children }) => {
  const appState = useSelector((state) => state.app);

  return (
    <>
      <BackDrop />
      <div
        className={`modal ${
          appState.modalStatus
            ? "modal__container--show"
            : "modal__container--hide"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
