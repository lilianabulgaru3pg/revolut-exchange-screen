import { RATES_ADD } from '../constants/actionTypes';
import { USER_DEFAULT_BASE_CURRENCY } from '../constants/CommonConstants';

const INITIAL_STATE = {
  [USER_DEFAULT_BASE_CURRENCY]: 1.0,
};

const addRates = (state, action) => action.rates;

function ratesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RATES_ADD:
      return addRates(state, action);
    default:
      return state;
  }
}
export default ratesReducer;
