import { createAction } from "redux-actions";
const SET_LENGTH = "intro/SET_LENGTH";
const SET_WEIGHT = "intro/SET_WEIGHT";
const SET_WEIGHTS = "intro/SET_WEIGHTS";

export const setLength = createAction(SET_LENGTH);
export const setWeight = createAction(SET_WEIGHT);
export const setweights = createAction(SET_WEIGHTS);

const initialState = {
  length: "",
  weight: "",
  weights: ""
};

const Intro = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    case "intro/SET_LENGTH":
      return {
        ...state,
        length: action.payload
      };
    case "intro/SET_WEIGHT":
      return {
        ...state,
        weight: action.payload
      };
    case "intro/SET_WEIGHTS":
      return {
        ...state,
        weights: action.payload
      };
    default:
      return state;
  }
};

export default Intro;
