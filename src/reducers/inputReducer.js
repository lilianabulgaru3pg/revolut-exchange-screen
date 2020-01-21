import {
  INPUT_FROM,
  INPUT_TO,
  DISPLAY_INPUT_TO,
  DISPLAY_INPUT_FROM,
  RESET_INPUTS,
} from '../constants/actionTypes';

const INITIAL_STATE = { to: 0, from: 0 };
// const format = val => Number(val);

const inputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_FROM:
      return { ...state, from: action.from };

    case INPUT_TO:
      return { ...state, to: action.to };

    case DISPLAY_INPUT_FROM:
      return {
        ...state,
        from: action.from,
      };

    case DISPLAY_INPUT_TO:
      return {
        ...state,
        to: action.to,
      };
    case RESET_INPUTS:
      return { from: 0, to: 0 };
    default:
      return state;
  }
};

export default inputReducer;
