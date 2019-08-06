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
  // length 입력폼 validate check, onchange handler
  handleLengthChange = e => {
    let length = e.target.value;

    if (!numberCheck(Number(length))) {
      length = this.state.length;
    }
    this.setState({
      length: length
    });
  };
  // weight 입력폼 validate check, onchange handler
  handleWeightChange = e => {
    let weight = e.target.value;

    if (!numberCheck(Number(weight))) {
      weight = this.state.weight;
    }

    this.setState({
      weight: weight
    });
  };
  // weights 입력폼 validate check, onchange handler
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
  // start 버튼 클릭 시 reducer, store 에 액션 보내서 state 값 수정 후 다음 페이지로 이동
  handleStartClick = e => {
    const { length, weight, weights } = this.state;
    const { introActions, bridgeActions } = this.props;
    const tmpStartArr = weights.split(",");

    introActions.setLength(length);
    introActions.setWeight(weight);
    introActions.setweights(weights);

    bridgeActions.setStartBridge(tmpStartArr.map(Number)); // startBridge > weight 스트링을 배열로 변경 후 요소 타입을 Number로 변경
    bridgeActions.setIngBridge(Array(Number(length)).fill(0)); // ingBridge > length만큼 배열 생성 후 0으로 초기화
    bridgeActions.setEndBridge([]); // endBridge

    this.props.history.push("/Bridge"); // 위의 모든 액션 처리 후 페이지 이동
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
