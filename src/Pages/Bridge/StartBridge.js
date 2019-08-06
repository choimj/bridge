import React from "react";
import * as Styles from "../../Styles/Bridge";

const StartBridge = props => {
  return (
    <Styles.StartIcon>
      <p>{props.val}</p>
    </Styles.StartIcon>
  );
};

export default StartBridge;
