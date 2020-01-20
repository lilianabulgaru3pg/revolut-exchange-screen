import {
  SELECT_TO_SYMBOL,
  SELECT_BASE_SYMBOL,
} from '../constants/actionTypes';

const doChangeBaseSymbol = value => ({
  type: SELECT_BASE_SYMBOL,
  baseCurrency: value,
});

const doChangeToSymbol = value => ({
  type: SELECT_TO_SYMBOL,
  toCurrency: value,
});
export { doChangeBaseSymbol, doChangeToSymbol };
