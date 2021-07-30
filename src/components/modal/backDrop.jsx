import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/app/app.actions";

const BackDrop = ({ children }) => {
  const appState = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return appState.modalStatus ? (
    <div className="backdrop" onClick={() => dispatch(toggleModal())}>
      {children}
    </div>
  ) : null;
};

export default BackDrop;
