import styled from "styled-components";
import bgImg from "../Images/bridge_background.jpg";
import bIcon from "../Images/b-icon.jpeg";

// main style
export const Root = styled.div`
  position: relative;

  &:after {
    content: "";
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    z-index: -1;
    height: 100vh;
    width: 100vw;
  }
`;

export const TopArea = styled.div`
  padding: 20px;
  & > p {
    font-size: 20px;
    padding-bottom: 10px;
  }
`;

export const textShowArea = styled.div`
  text-align: center;
  font-size: 30px;
  padding: 20px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  padding: 20px;
  & > div.startClass,
  & > div.endClass {
    flex: 1;
    height: 70vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  & > div.ingClass {
    flex: 2;
    height: 70vh;
    display: table;
  }
  & > div.ingClass div.iconWrapper {
    height: 50%;
    display: table-cell;
    vertical-align: middle;
  }
  & > div.ingClass div.ingInner {
    text-align: center;
    margin: auto;
  }
`;

// startBridge Component style
export const StartIcon = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${bIcon});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  border-radius: 50%;
  margin: 10px auto;

  & > p {
    display: none;
  }
`;

// ingBridge Component style
export const IngIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid gray;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }

  &.showIcon {
    background-image: url(${bIcon});
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-color: #ffffff;
    border: none;
  }

  & > p {
    display: none;
  }
`;

// endBridge Component style
export const EndIcon = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${bIcon});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  border-radius: 50%;
  margin: 10px auto;

  & > p {
    display: none;
  }
`;
