import React from "react";
import LoadingIcon from "../../assets/images/loading.svg";
import DigikalaLogo from "../../assets/images/header-logo.png";

const Loading = () => {
  return (
    <div className="flex flex-column align-center">
      <img src={DigikalaLogo} className="loading__logo" alt="" />
      <img src={LoadingIcon} className="loading__icon" alt="" />
    </div>
  );
};

export default Loading;
