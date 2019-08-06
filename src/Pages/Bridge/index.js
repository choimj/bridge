import React from "react";

import StartBridge from "../Bridge/StartBridge";
import IngBridge from "../Bridge/IngBridge";
import EndBridge from "../Bridge/EndBridge";
import * as Styles from "../../Styles/Bridge";

const Bridge = ({ length, weight, weights, state }) => {
  const { startBridge, ingBridge, endBridge, time, totalWeight } = state;

  return (
    <Styles.Root>
      <Styles.TopArea>
        <p>Length: {length}</p>
        <p>Weight: {weight}</p>
        <p>Weights: {weights}</p>
      </Styles.TopArea>

      <Styles.FlexWrapper>
        <div className="startClass">
          {startBridge.map((val, i) => (
            <StartBridge key={"s" + i} val={val} />
          ))}
        </div>
        <div className="ingClass">
          <div className="iconWrapper">
            <Styles.textShowArea>
              <p>Time : {time}</p>
            </Styles.textShowArea>
            <div className="ingInner">
              {ingBridge.map((val, i) => (
                <IngBridge
                  key={"i" + i}
                  val={val}
                  className={val > 0 ? "showIcon" : ""}
                />
              ))}
            </div>
            <Styles.textShowArea>
              <p>Weight : {totalWeight}</p>
            </Styles.textShowArea>
          </div>
        </div>
        {/* 다리 건너기 완료한 요소들 */}
        <div className="endClass">
          {endBridge.map((val, i) => (
            <EndBridge key={"e" + i} val={val} />
          ))}
        </div>
      </Styles.FlexWrapper>
    </Styles.Root>
  );
};

export default Bridge;
