import React from "react";

const ButtonComponent = ({
  buttonIdProps,
  onClickProps,
  textProps,
  ...props
}) => {
  return (
    <button id={buttonIdProps} onClick={onClickProps} {...props}>
      {textProps}
    </button>
  );
};

export default ButtonComponent;
