import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Bridge from "../Pages/Bridge";
import { bindActionCreators } from "redux";
import * as bridgeActions from "../Store/Modules/Bridge";

class BridgeContainer extends React.Component {
  // 전역변수
  bridgeInterval = null; //setInterval 관리 변수
  //bridgeSetTimeout = null; //setTimeout 관리 변수
  startBrigeLength = 0; // 최초 startBridge의 길이 저장 변수
  // state
  state = {
    startBridge: [],
    ingBridge: [],
    endBridge: [],
    time: 0,
    totalWeight: 0
  };
  // 해체 할당!!!!! 반드시!!!!!!
  componentWillMount = () => {
    const { length, history } = this.props;
    if (!Number(length)) {
      // store에 저장된 값이 입려된 값이 아닌 초기값인 경우 alert 창 노출과 함께 페이지 이동
      alert("잘못된 접근입니다.");
      history.push("/");
    } else {
      const { startArr, ingArr, endArr } = this.props;
      // 스토어의 변수와 중복되는 경우 스토어나 state둘중에 하나만
      // 한개의 라이프사이클
      this.setState({
        startBridge: startArr,
        ingBridge: ingArr,
        endBridge: endArr
      });
    }
  };

  componentDidMount = () => {
    // DOM 이 마운트 된 후 setTimeout 으로 init 함수 실행
    // setTimeout 지양
    //this.bridgeSetTimeout = setTimeout(this.init, 0);
    this.init();
  };

  componentWillUnmount = () => {
    // DOM 이 언마운트 될 때 비동기 함수 클리어
    if (this.bridgeInterval !== null) {
      clearInterval(this.bridgeInterval);
    }
    if (this.bridgeSetTimeout !== null) {
      clearTimeout(this.bridgeSetTimeout);
    }
  };

  // 다리위에 있는 동물 무게 합 구하기
  sumArray = (accumulator, currentValue) => accumulator + currentValue;
  // 초기화 함수
  init = () => {
    //statrBridgeLength 를 파라미터로
    this.startBrigeLength = this.state.startBridge.length;
    this.bridgeInterval = setInterval(this.crossStartBridge, 1000);
  };

  crossStartBridge = () => {
    //시작 배열에 요소가 있는 경우 startBridge -> IngBridge로 이동시키기
    this.crossIngBridge();
  };

  sumIngArray = arr => {
    return arr.reduce(this.sumArray);
  };

  // handle > 이벤트를 바로 받아서 처리할 경우
  // 이 경우 단순 함수이므로 handle 키워드 지양
  crossIngBridge = () => {
    const { length } = this.props;
    const { ingBridge, endBridge, time } = this.state;

    const { weight } = this.props;
    let { startBridge } = this.state;
    // 자르기 전에 체크 후 조건이 맞지않는 경우 자르지 말기
    let firstStartBridge = !startBridge[0] ? 0 : startBridge[0];

    let tmpStartBridge = startBridge.slice(1, startBridge.length);

    let tmpIngBridge = [
      firstStartBridge,
      ...ingBridge.slice(0, ingBridge.length - 1)
    ];

    let tmpEndBridge =
      ingBridge[length - 1] !== 0
        ? [ingBridge[length - 1], ...endBridge]
        : [...endBridge];

    let tmpTotalWeight = this.sumIngArray(tmpIngBridge);
    if (tmpTotalWeight > weight) {
      tmpStartBridge = [firstStartBridge, ...tmpStartBridge];
      tmpTotalWeight = tmpTotalWeight - firstStartBridge;
      firstStartBridge = 0;
    }
    this.setState({
      startBridge: tmpStartBridge,
      ingBridge: [
        firstStartBridge,
        ...ingBridge.slice(0, ingBridge.length - 1)
      ],
      endBridge: tmpEndBridge,
      totalWeight: tmpTotalWeight,
      time: time + 1
    });

    this.opClearInterval(); //함수명 변경
  };

  opClearInterval = () => {
    const { endBridge } = this.state;

    if (endBridge.length === this.startBrigeLength) {
      clearInterval(this.bridgeInterval);
    }
  };

  render() {
    const { length, weight, weights } = this.props;

    return (
      <Bridge
        length={length}
        weight={weight}
        weights={weights}
        state={this.state}
      />
    );
  }
}

BridgeContainer.propTypes = {
  startBridge: PropTypes.array,
  ingBridge: PropTypes.array,
  endBridge: PropTypes.array,
  time: PropTypes.number
};

BridgeContainer.defaultProps = {
  startBridge: [],
  ingBridge: [],
  endBridge: [],
  time: 0
};

const mapStateToProps = state => {
  return {
    length: state.Intro.length,
    weight: state.Intro.weight,
    weights: state.Intro.weights,
    startArr: state.Bridge.startBridge,
    ingArr: state.Bridge.ingBridge,
    endArr: state.Bridge.endBridge,
    time: state.Bridge.time
  };
};

const mapDispatchToPros = dispatch => {
  return {
    bridgeActions: bindActionCreators(bridgeActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(BridgeContainer);
