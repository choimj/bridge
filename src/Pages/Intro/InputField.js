import React from "react";

const InputField = props => {
  return (
    <p>
      <label>{props.title}</label>
      <input
        type={props.type}
        value={props.length}
        onChange={props.onLengthChange}
      />
    </p>
  );
};

export default InputField;
