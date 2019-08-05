import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Bridge from "../Pages/Bridge";
import { bindActionCreators } from "redux";
import * as bridgeActions from "../Store/Modules/Bridge";
import store from "../Store";
import * as introActions from "../Store/Modules/Intro";

const propTypes = {};

class BridgeContainer extends React.Component {
  constructor(props) {
    super(props);

    //const bridgeActions = bridgeActions;
    //store.subscribe(actions.setBridgeLength);

    //console.log("..");

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
    //setInterval(this.handleCrossBridge, 2000);
    // setTimeout(() => {
    //   this.setState({
    //     startBridge: startArr,
    //     ingBridge: ingArr,
    //     endBridge: endArr
    //   });
    // }, 0);

    const { startArr, ingArr, endArr } = this.props;
    let { startBridge } = this.state;
    this.setState({
      startBridge: startArr,
      ingBridge: ingArr,
      endBridge: endArr
    });
    //console.log(this.state);
  };

  componentDidMount = () => {
    //console.log(this.state);
    //console.log("componentDidMount");
    setTimeout(this.init, 1000);
    //setTimeout(this.handleCrossBridge, 2000);
  };

  // 다리위에 있는 동물 무게 합 구하기
  sumArray = (accumulator, currentValue) => accumulator + currentValue;
  init = () => {
    this.start();

    //let { startBridge } = this.state;
    //console.log(this.startBridge.length);
    let aa
    if (this.state.startBridge.length > 0) {
      aa = setInterval(this.handleCrossStartBridge, 500);
      //setInterval(this.handleCrossIngBridge, 500);
    } else {
      clearInterval(aa);
    }
  };

  handleCrossStartBridge = () => {
    let { startBridge } = this.state;
    startBridge = startBridge.slice(1, startBridge.length);
    this.setState({
      startBridge: startBridge
    });
    console.log("..");
  };

  handleCrossIngBridge = () => {
    const { weight, length } = this.props;
    let { ingBridge } = this.state;
    if (ingBridge[length - 1] !== 0) {
      setTimeout(this.handleCrossEndBridge, 500);
    }

    ingBridge = ingBridge.slice(0, length - 1);
    this.setState({ ingBridge: ingBridge });
    console.log(">");
  };

  handleCrossEndBridge = () => {
    const { weight, length } = this.props;
    let { ingBridge, endBridge } = this.state;
    endBridge = [ingBridge[length - 1], ...endBridge];
    this.setState({ endBridge: endBridge });
  };

  handleCrossBridge = () => {
    //console.log(this.state);
    //console.log(this.props);
    const { weight, length } = this.props;
    let { startBridge, ingBridge, endBridge, time } = this.state;

    const weightsLng = startBridge.length;
    //const actions = this.props.bridgeActions;
    //console.log(actions);
    //setTimeout(() => {
    while (endBridge.length < weightsLng) {
      // 1. 다리의 맨 마지막 요소 제거
      if (ingBridge[length - 1] !== 0) {
        endBridge = [ingBridge[length - 1], ...endBridge];
        //actions.setEndBridge(endBridge);
        this.setState({ endBridge: endBridge });
      }
      ingBridge = ingBridge.slice(0, length - 1);
      this.setState({ ingBridge: ingBridge });
      //console.log(ingBridge);
      // 2. 다리 위의 무게 합산
      let sum = ingBridge.reduce(this.sumArray);

      if (sum + startBridge[0] <= weight) {
        //다리에 올라가 있는 요소 합 < 허용되는 최대 무게
        ingBridge = [startBridge[0], ...ingBridge];
        startBridge = startBridge.slice(1, startBridge.length);
        //actions.setStartBridge(startBridge);
        //console.log(ingBridge);
        this.setState({ ingBridge: ingBridge });
        this.setState({
          startBridge: startBridge
        });
      } else {
        ingBridge = [0, ...ingBridge];
        //actions.setIngBridge(ingBridge);
        this.setState({ ingBridge: ingBridge });
        console.log(ingBridge);
      }
      time = time + 1;
      //actions.setTime(time);
      this.setState({ time: time });
    }
    //}, 2000);
  };

  render() {
    const { length, weight, weights } = this.props;
    const { startBridge } = this.state;
    //console.log(this.props);
    return (
      <Bridge
        length={length}
        weight={weight}
        weights={weights}
        startBridge={startBridge}
        state={this.state}
      />
    );
    //return <div />;
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
