import React from "react";

const InputField = props => {
  return (
    <React.Fragment>
      <label>{props.title}</label>
      <input
        type={props.type}
        value={props.length}
        onChange={props.onLengthChange}
      />
    </React.Fragment>
  );
};

export default InputField;
