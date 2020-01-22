import {
  ENABLE_EXCHANGE_BTN,
  DISABLE_EXCHANGE_BTN,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  isDisabled: false,
};

const exchangeBtnReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISABLE_EXCHANGE_BTN:
      return { isDisabled: true };
    case ENABLE_EXCHANGE_BTN:
      return { isDisabled: false };
    default:
      return state;
  }
};

export default exchangeBtnReducer;
