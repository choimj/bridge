import React from "react";
import PropTypes from "prop-types";
import Intro from "../Pages/Intro";
import { numberCheck, stringCheck } from "../Utils/Validate";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as introActions from "../Store/Modules/Intro";

const propTypes = {
  length: PropTypes.string,
  weight: PropTypes.string,
  weights: PropTypes.string,
  handleLangthChange: PropTypes.func,
  handleWeightChange: PropTypes.func,
  handleWeightsChange: PropTypes.func
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
      length = "";
    }
    this.setState({
      length: length
    });
  };
  handleWeightChange = e => {
    let weight = e.target.value;
    if (!numberCheck(Number(weight))) {
      weight = "";
    }
    this.setState({
      weight: weight
    });
  };
  handleWeightsChange = e => {
    let weights = e.target.value;
    // 유효성 체크하기
    //console.log(stringCheck(weights));
    if (!stringCheck(weights)) {
      weights = this.state.weights;
    }
    this.setState({
      weights: weights
    });
  };
  handleStartClick = e => {
    const { length, weight, weights } = this.state;
    const actions = this.props.introActions;
    actions.setLength(length);
    actions.setWeight(weight);
    actions.setWeights(weights);
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
  return {
    length: state.Intro.length,
    weight: state.Intro.weight,
    weights: state.Intro.weights
  };
};
const mapDispatchToPros = dispatch => {
  return {
    introActions: bindActionCreators(introActions, dispatch)
  };
};
//export default IntroContainer;
export default connect(
  mapStateToProps,
  mapDispatchToPros
)(IntroContainer);
