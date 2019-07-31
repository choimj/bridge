import React from "react";
import pandaImg from "../Images/panda.png";

const Bridge = ({ props, state }) => {
  const { length, weight, weights } = props;
  //console.log(state);
  return (
    <div>
      <div>
        <p>Length: {length}</p>
        <p>Weight: {weight}</p>
        <p>Weights: {weights}</p>
      </div>
      <div style={{ display: "flex" }} />
    </div>
  );
};

export default Bridge;
