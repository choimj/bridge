import React from "react";
import InputField from "./InputField";
import "./index.css";
import * as styles from "../../Styles/Intro";

const Intro = props => {
  const { length, weight, weights } = props.state;

  return (
    <styles.Root>
      <styles.InputArea>
        <p>
          <InputField
            title="Length"
            type="text"
            length={length}
            onLengthChange={props.onLengthChange}
          />
        </p>
        <p>
          <InputField
            title="Weight"
            type="text"
            length={weight}
            onLengthChange={props.onWeightChange}
          />
        </p>
        <p>
          <InputField
            title="Weights"
            type="text"
            length={weights}
            onLengthChange={props.onWeightsChange}
          />
        </p>
        <p>
          <button onClick={props.onStartClick}>Strat</button>
        </p>
      </styles.InputArea>
    </styles.Root>
  );
};

export default Intro;
