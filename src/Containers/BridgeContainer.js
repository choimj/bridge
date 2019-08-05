import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Bridge from "../Pages/Bridge";
import { bindActionCreators } from "redux";
import * as bridgeActions from "../Store/Modules/Bridge";
import store from "../Store";
import * as introActions from "../Store/Modules/Intro";

const propTypes = {
  startBridge: PropTypes.array,
  ingBridge: PropTypes.array,
  endBridge: PropTypes.array,
  time: PropTypes.number
};

class BridgeContainer extends React.Component {
  constructor(props) {
    super(props);

    introActions.setLength("5");
    introActions.setWeight("10");
    introActions.setweights("3, 7, 3, 2, 5, 8");

    store.dispatch(bridgeActions.setIngBridge([0, 0, 0, 0, 0]));
    store.dispatch(bridgeActions.setWeight("10"));
    store.dispatch(bridgeActions.setStartBridge([3, 7, 3, 2, 5, 8]));
  }

  state = {
    startBridge: [],
    ingBridge: [],
    endBridge: [],
    time: 0
  };

  start = () => {
    const { startArr, ingArr, endArr } = this.props;
    this.setState({
      startBridge: startArr,
      ingBridge: ingArr,
      endBridge: endArr
    });
  };

  componentDidMount = () => {
    setTimeout(this.init, 1000);
  };
  bridgeInterval = null;
  startBrigeLength = 0;
  // 다리위에 있는 동물 무게 합 구하기
  sumArray = (accumulator, currentValue) => accumulator + currentValue;
  init = () => {
    this.start();
    this.startBrigeLength = this.state.startBridge.length;
    this.bridgeInterval = setInterval(this.handleCrossStartBridge, 1000);
  };

  handleCrossStartBridge = () => {
    //시작 배열에 요소가 있는 경우 startBridge -> IngBridge로 이동시키기
    this.handleCrossIngBridge();
  };

  sumIngArray = arr => {
    return arr.reduce(this.sumArray);
  };

  handleCrossIngBridge = () => {
    const { length } = this.props;
    const { ingBridge, endBridge, time } = this.state;

    const { weight } = this.props;
    let { startBridge } = this.state;
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

    if (this.sumIngArray(tmpIngBridge) > weight) {
      tmpStartBridge = [firstStartBridge, ...tmpStartBridge];
      firstStartBridge = 0;
    }
    this.setState({
      startBridge: tmpStartBridge,
      ingBridge: [
        firstStartBridge,
        ...ingBridge.slice(0, ingBridge.length - 1)
      ],
      endBridge: tmpEndBridge
    });

    this.setState({
      time: time + 1
    });

    this.handleClearInterval();
  };

  handleClearInterval = () => {
    const { endBridge } = this.state;

    if (endBridge.length === this.startBrigeLength) {
      clearInterval(this.bridgeInterval);
    }
  };

  handleCrossEndBridge = () => {
    const { length } = this.props;
    let { ingBridge, endBridge } = this.state;

    this.setState({ endBridge: [ingBridge[length - 1], ...endBridge] });
  };

  render() {
    const { length, weight, weights } = this.props;
    const { startBridge } = this.state;

    return (
      <Bridge
        length={length}
        weight={weight}
        weights={weights}
        startBridge={startBridge}
        state={this.state}
      />
    );
  }
}

BridgeContainer.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    // length: state.Intro.length,
    // weight: state.Intro.weight,
    // weights: state.Intro.weights,
    length: "5",
    weight: "10",
    weights: "3, 7, 3, 2, 5, 8",
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
