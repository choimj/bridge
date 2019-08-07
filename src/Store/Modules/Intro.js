import { createAction } from "redux-actions";
// const SET_LENGTH = "intro/SET_LENGTH";
// const SET_WEIGHT = "intro/SET_WEIGHT";
// const SET_WEIGHTS = "intro/SET_WEIGHTS";
const SET_VALUE = "intro/SET_VALUE";

// export const setLength = createAction(SET_LENGTH);
// export const setWeight = createAction(SET_WEIGHT);
// export const setweights = createAction(SET_WEIGHTS);

export const setValue = createAction(SET_VALUE);

const initialState = {
  length: "",
  weight: "",
  weights: ""
};

const Intro = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    // case "intro/SET_LENGTH":
    //   return {
    //     ...state,
    //     length: action.payload
    //   };
    // case "intro/SET_WEIGHT":
    //   return {
    //     ...state,
    //     weight: action.payload
    //   };
    // case "intro/SET_WEIGHTS":
    //   return {
    //     ...state,
    //     weights: action.payload
    //   };
    case "intro/SET_VALUE":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default Intro;
