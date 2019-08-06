import React from "react";
import styled from "styled-components";
import bIcon from "../../Images/b-icon.jpeg";

const StartIcon = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${bIcon});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  border-radius: 50%;
  margin: 10px;

  & > p {
    display: none;
  }
`;

const StartBridge = props => {
  return (
    <StartIcon key={props.key}>
      <p>{props.val}</p>
    </StartIcon>
  );
};

export default StartBridge;
