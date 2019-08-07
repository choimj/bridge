import React from "react";

const InputField = props => {
  return (
    <p>
      <label>{props.title}</label>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onLengthChange}
      />
    </p>
  );
};
//propType이 필요!!!!
export default InputField;
