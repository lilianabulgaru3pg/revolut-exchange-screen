import {
  USER_DEFAULT_BASE_CURRENCY,
  DEFAULT_TO_CURRENCY,
  SELECT_BASE_CURRENCY,
  SELECT_TO_CURRENCY,
} from '../constants/CommonConstants';

const INITIAL_STATE = {
  baseCurrency: USER_DEFAULT_BASE_CURRENCY,
  toCurrency: DEFAULT_TO_CURRENCY,
};

const applyBaseCurrencySelected = (state, action) => ({
  ...state,
  baseCurrency: action.baseCurrency,
});

const applyToCurrencySelected = (state, action) => ({
  ...state,
  toCurrency: action.toCurrency,
});

const selectCurrencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_BASE_CURRENCY:
      return applyBaseCurrencySelected(state, action);
    case SELECT_TO_CURRENCY:
      return applyToCurrencySelected(state, action);
    default:
      return state;
  }
};

export default selectCurrencyReducer;
