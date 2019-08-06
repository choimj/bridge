import React from "react";

import StartBridge from "../Bridge/StartBridge";
import IngBridge from "../Bridge/IngBridge";
import EndBridge from "../Bridge/EndBridge";
import styled from "styled-components";

const Root = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #d7993d;
`;

const TopArea = styled.div`
  & > p {
    font-size: 20px;
  }
`;

const TimeArea = styled.div`
  text-align: center;
  font-size: 30px;
`;

const Bridge = ({ length, weight, weights, startBridge, state }) => {
  const { ingBridge, endBridge, time } = state;

  return (
    <Root>
      <TopArea>
        <p>Length: {length}</p>
        <p>Weight: {weight}</p>
        <p>Weights: {weights}</p>
      </TopArea>
      <TimeArea>
        <p>time : {time}</p>
      </TimeArea>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1", border: "2px solid green" }}>
          {startBridge.map((val, i) => (
            <StartBridge key={i} val={val} />
          ))}
        </div>

        <div
          style={{
            flex: "2",
            border: "2px solid green"
          }}
        >
          {ingBridge.map((val, i) => (
            <IngBridge key={i} val={val} />
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
            <EndBridge key={i} val={val} />
          ))}
        </div>
      </div>
    </Root>
  );
};

export default Bridge;
