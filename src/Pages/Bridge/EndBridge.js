import React from "react";
import styled from "styled-components";
import bIcon from "../../Images/b-icon.jpeg";

const EndIcon = styled.div`
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

const EndBridge = props => {
  return (
    <EndIcon key={props.key}>
      <p>{props.val}</p>
    </EndIcon>
  );
};

export default EndBridge;
