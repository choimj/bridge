import React from "react";
import InputField from "./InputField";
import * as styles from "../../Styles/Intro";

const Intro = props => {
  const { length, weight, weights } = props.state;

  return (
    <styles.Root>
      <styles.InputArea>
        <InputField
          title="Length"
          type="text"
          length={length}
          onLengthChange={props.onLengthChange}
        />
        <InputField
          title="Weight"
          type="text"
          length={weight}
          onLengthChange={props.onWeightChange}
        />
        <InputField
          title="Weights"
          type="text"
          length={weights}
          onLengthChange={props.onWeightsChange}
        />
        <div>
          <button onClick={props.onStartClick}>Strat</button>
        </div>
      </styles.InputArea>
    </styles.Root>
  );
};

export default Intro;
