import React from "react";

const Image = ({ url, alt, ...rest }) => {
  return (
    <>
      <img src={url} alt={alt} {...rest} />
    </>
  );
};

export default Image;
