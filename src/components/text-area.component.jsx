import React from "react";

const TextAreaComponent = ({
  rowProps,
  colProps,
  maxProps,
  nameProps,
  idProps,
  onChangeProps,
  ...props
}) => {
  return (
    <textarea
      row={rowProps}
      col={colProps}
      maxLength={maxProps}
      name={nameProps}
      id={idProps}
      onChange={onChangeProps}
      {...props}
    />
  );
};

export default TextAreaComponent;
