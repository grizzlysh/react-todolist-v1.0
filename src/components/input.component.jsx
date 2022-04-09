import React from "react";

const InputComponent = ({
  typeProps,
  nameProps,
  idProps,
  onChangeProps,
  ...props
}) => {
  return (
    <input
      type={typeProps}
      name={nameProps}
      id={idProps}
      onChange={onChangeProps}
      {...props}
    />
  );
};

export default InputComponent;
