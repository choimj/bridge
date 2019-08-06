import React from "react";
import * as Styles from "../../Styles/Bridge";

const IngBridge = props => {
  return (
    <Styles.IngIcon className={props.className}>
      <p>{props.val}</p>
    </Styles.IngIcon>
  );
};

export default IngBridge;
