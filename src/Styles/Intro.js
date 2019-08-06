import styled from "styled-components";
import bgImg from "../Images/bridge_background.jpg";

export const Root = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  display: flex;
  flex-direction: column;

  & button {
    font-size: 23px;
    width: 20vw;
    margin: 5px 0;
    text-align: center;
  }
`;

export const InputArea = styled.div`
  width: 40vw;
  text-align: right;
  position: absolute;
  right: 3vw;
  bottom: 10vh;

  & > p {
    margin-bottom: 1vh;
  }
  & > p > label {
    font-size: 20px;
    margin-right: 10px;
    color: #ffffff;
  }
  & > p > input {
    font-size: 20px;
    text-align: right;
    width: 20vw;
  }
  & p:nth-child(3) input {
    width: 30vw;
  }
`;
