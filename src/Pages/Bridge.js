import React from "react";
//import pandaImg from "../Images/panda.png";

const Bridge = ({ length, weight, weights, startBridge, state }) => {
  const { ingBridge, endBridge, time } = state;

  return (
    <div>
      <div>
        <p>Length: {length}</p>
        <p>Weight: {weight}</p>
        <p>Weights: {weights}</p>
        <p>time : {time}</p>
      </div>
      <div />
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1", border: "2px solid green" }}>
          {startBridge.map((val, i) => (
            <div
              style={{
                width: "50px",
                height: "50px",
                border: "1px solid black"
              }}
              key={i}
            >
              {val}
            </div>
          ))}
        </div>

        <div
          style={{
            flex: "2",
            border: "2px solid green"
          }}
        >
          {ingBridge.map((val, i) => (
            <div
              style={{
                width: "50px",
                height: "50px",
                border: "1px solid yellow",
                float: "left"
              }}
              key={i}
            >
              {val}
            </div>
          ))}
        </div>
        {/* 다리 건너기 완료한 요소들 */}
        <div
          style={{
            flex: "1",
            border: "2px solid green"
          }}
        >
          {endBridge.map((val, i) => (
            <div
              style={{
                width: "50px",
                height: "50px",
                border: "1px solid red"
              }}
              key={i}
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bridge;
