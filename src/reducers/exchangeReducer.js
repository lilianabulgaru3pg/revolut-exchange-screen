import {
  ENABLE_EXCHANGE_BTN,
  DISABLE_EXCHANGE_BTN,
} from '../constants/CommonConstants';

const INITIAL_STATE = {
  isDisabled: true,
};

const exchangeBtnReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISABLE_EXCHANGE_BTN:
      return { ...state, isDisabled: true };
    case ENABLE_EXCHANGE_BTN:
      return { ...state, isDisabled: false };
    default:
      return state;
  }
};

export default exchangeBtnReducer;
