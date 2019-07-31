import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Bridge from "../Pages/Bridge";

const propTypes = {
  length: PropTypes.string,
  weight: PropTypes.string,
  weights: PropTypes.string
};

class BridgeContainer extends React.Component {
  state = {
    startArr: [],
    ingArr: [],
    endArr: [],
    count: 0
  };

  componentDidMount = () => {
    const tmpArr = this.props.weights.split(",");
    let ingTmpArr = [];
    for (let i = 0; i < this.props.length; i++) {
      ingTmpArr[i] = 0;
    }
    //console.log(tmpArr);
    this.setState({
      startArr: [...this.state.startArr, tmpArr],
      ingArr: ingTmpArr
    });

    //setInterval(this.handleCrossBridge, 2000);
    setTimeout(this.handleCrossBridge, 100);
    //this.handleCrossBridge;
  };
  // 다리위에 있는 동물 무게 합 구하기
  sumArray = (accumulator, currentValue) => accumulator + currentValue;

  handleCrossBridge = () => {
    const { startArr, ingArr, endArr, count } = this.state;
    const { length, weight, weights } = this.props;
    console.log(ingArr);
    const sum = ingArr.reduce(this.sumArray);
    console.log(sum);
    if (ingArr.reduce(this.sumArray) < weight) {
    }
    //while(startArr.length < 0){

    //}
  };

  render() {
    return <Bridge props={this.props} state={this.state} />;
  }
}

BridgeContainer.propTypes = propTypes;

const mapStateToProps = state => {
  //   return {
  //     length: state.Intro.length,
  //     weight: state.Intro.weight,
  //     weights: state.Intro.weights
  //   };
  return {
    length: "5",
    weight: "10",
    weights: "3,7,3,2,5,8"
  };
};

//export default IntroContainer;
export default connect(mapStateToProps)(BridgeContainer);
