import React from "react";
import PropTypes from "prop-types";
import Intro from "../Pages/Intro";
import { numberCheck, stringCheck } from "../Utils/Validate";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as introActions from "../Store/Modules/Intro";
import * as bridgeActions from "../Store/Modules/Bridge";

const propTypes = {
  length: PropTypes.string,
  weight: PropTypes.string,
  weights: PropTypes.string
};

class IntroContainer extends React.Component {
  state = {
    length: "",
    weight: "",
    weights: ""
  };

  handleLengthChange = e => {
    let length = e.target.value;

    if (!numberCheck(Number(length))) {
      length = this.state.length;
    }
    this.setState({
      length: length
    });
  };
  handleWeightChange = e => {
    let weight = e.target.value;

    if (!numberCheck(Number(weight))) {
      weight = this.state.weight;
    }

    this.setState({
      weight: weight
    });
  };
  handleWeightsChange = e => {
    let weights = e.target.value;
    // 유효성 체크하기
    if (!stringCheck(weights)) {
      weights = this.state.weights;
    }
    this.setState({
      weights: weights
    });
  };
  handleStartClick = e => {
    const { length, weight, weights } = this.state;
    const bridgeActions = this.props.bridgeActions;
    const tmpStartArr = weights.split(",");

    introActions.setLength(length);
    introActions.setWeight(weight);
    introActions.setweights(weights);

    bridgeActions.setStartBridge(tmpStartArr.map(Number)); // startBridge
    bridgeActions.setIngBridge(Array(length).fill(0)); // ingBridge
    bridgeActions.setEndBridge([]); // ingBridge

    this.props.history.push("/Bridge");
  };
  render() {
    return (
      <Intro
        onLengthChange={this.handleLengthChange}
        onWeightChange={this.handleWeightChange}
        onWeightsChange={this.handleWeightsChange}
        onStartClick={this.handleStartClick}
        state={this.state}
      />
    ); //Intro view 컴포넌트 호출
  }
}

IntroContainer.propTypes = propTypes;

const mapStateToProps = state => {
  return {};
};
const mapDispatchToPros = dispatch => {
  return {
    introActions: bindActionCreators(introActions, dispatch),
    bridgeActions: bindActionCreators(bridgeActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(IntroContainer);
