import React from "react";
import styled from "styled-components";
import bIcon from "../../Images/b-icon.jpeg";

const IngIcon = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${props =>
    props.val > 0 ? `${bIcon}` : `${props.disabled}`});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  border-radius: 50%;
  float: left;
  border: 1px solid red;

  & > p {
    /* display: none; */
  }
`;

const IngBridge = props => {
  return (
    <IngIcon key={props.key}>
      <p>{props.val}</p>
    </IngIcon>
  );
};

export default IngBridge;
