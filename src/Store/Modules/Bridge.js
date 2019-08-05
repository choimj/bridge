import { createAction } from "redux-actions";

const SET_START_BRIDGE = "bridge/SET_START_BRIDGE";
const SET_ING_BRIDGE = "bridge/SET_ING_BRIDGE";
const SET_END_BRIDGE = "bridge/SET_END_BRIDGE";
const SET_WEIGHT = "bridge/SET_WEIGHT";
const SET_TIME = "bridge/SET_TIME";

export const setStartBridge = createAction(SET_START_BRIDGE);
export const setIngBridge = createAction(SET_ING_BRIDGE);
export const setEndBridge = createAction(SET_END_BRIDGE);
export const setWeight = createAction(SET_WEIGHT);
export const setTime = createAction(SET_TIME);

const initialState = {
  startBridge: [],
  ingBridge: [],
  endBridge: [],
  time: 0
};

const Bridge = (state = initialState, action) => {
  //console.log(action.type, "", action.payload);
  //console.log(state);
  switch (action.type) {
    case "bridge/SET_START_BRIDGE":
      return {
        ...state,
        startBridge: action.payload
      };
    case "bridge/SET_ING_BRIDGE":
      return {
        ...state,
        ingBridge: action.payload
      };
    case "bridge/SET_END_BRIDGE":
      return {
        ...state,
        endBridge: action.payload
      };
    case "bridge/SET_WEIGHT":
      return {
        ...state,
        weight: action.payload
      };
    case "bridge/SET_TIME":
      return {
        ...state,
        time: action.payload
      };
    default:
      return state;
  }
};

export default Bridge;
