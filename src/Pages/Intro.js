import React from "react";

const Intro = props => {
  //console.log(props);
  const { length, weight, weights } = props.state;

  return (
    <div>
      <p>
        <label>Length</label>
        <input type="text" value={length} onChange={props.onLengthChange} />
      </p>
      <p>
        <label>Weight</label>
        <input type="text" value={weight} onChange={props.onWeightChange} />
      </p>
      <p>
        <label>Weights</label>
        <input type="text" value={weights} onChange={props.onWeightsChange} />
      </p>
      <p>
        <button onClick={props.onStartClick}>Strat</button>
      </p>
    </div>
  );
};

export default Intro;
