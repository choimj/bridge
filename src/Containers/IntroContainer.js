import React from "react";
import PropTypes from "prop-types";
import Intro from "../Pages/Intro";
import { numberCheck, stringCheck } from "../Utils/Validate";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as introActions from "../Store/Modules/Intro";
import * as bridgeActions from "../Store/Modules/Bridge";

class IntroContainer extends React.Component {
  state = {
    length: "",
    weight: "",
    weights: ""
  };
  // onChange 로써 store의 값을 계속 변경
  // 입력을 하고있는 경우와 입력이 완료된 경우를 구분하여 캐치하기는 어렵지만 세가지 값의 유효성을 체크하고나서 스토어에 저장
  // 자주 변경된다고 해서 리덕스에 안올릴 필요는 없음.
  // length 입력폼 validate check, onchange handler
  handleLengthChange = e => {
    let length = e.target.value;

    if (numberCheck(Number(length))) {
      this.setState({
        length: length
      });
    }
  };
  // weight 입력폼 validate check, onchange handler
  handleWeightChange = e => {
    let weight = e.target.value;

    if (numberCheck(Number(weight))) {
      this.setState({
        weight: weight
      });
      // 유효성검사를 통과못하는 경우 setState를 하면됨.
    }
  };
  // weights 입력폼 validate check, onchange handler
  handleWeightsChange = e => {
    let weights = e.target.value;
    // 유효성 체크하기
    if (stringCheck(weights)) {
      this.setState({
        weights: weights
      });
    }
  };
  // start 버튼 클릭 시 reducer, store 에 액션 보내서 state 값 수정 후 다음 페이지로 이동
  handleStartClick = e => {
    const { length, weights } = this.state;
    const { introActions, bridgeActions } = this.props;
    const tmpStartArr = weights.split(",");

    // 세가지 변수가 한꺼번에 움직이는 경우 액션을 하나로 통합시키는 것도 좋은 방법
    // introActions.setLength(length);
    // introActions.setWeight(weight);
    // introActions.setweights(weights);
    introActions.setValue(this.state);

    // set하는 부분을 브릿지 부분에서 didMount 할떄 처리하는 것도 좋은방법
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
        {...this.state}
      />
      // 넘기는 props의 이름을 구분할 수 있도록 이름을 명확하게 정하기. state -> inputPros
      // 변수명으로 state, props 등 자주사용하는 단어는 사용을 지양.
    ); //Intro view 컴포넌트 호출
  }
}

// 따로변수 선언할 필요 없음.
IntroContainer.propTypes = {
  length: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  weights: PropTypes.string.isRequired
};

IntroContainer.defaultProps = {
  length: "",
  weight: "",
  weights: ""
};

// const mapStateToProps = state => {
//   return {};
// };
const mapDispatchToPros = dispatch => {
  return {
    introActions: bindActionCreators(introActions, dispatch),
    bridgeActions: bindActionCreators(bridgeActions, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToPros
)(IntroContainer);
