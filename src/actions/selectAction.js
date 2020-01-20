import {
  SELECT_BASE_CURRENCY,
  SELECT_TO_CURRENCY,
} from '../constants/CommonConstants';

const doSelectBaseCurrency = value => ({
  type: SELECT_BASE_CURRENCY,
  baseCurrency: value,
});

const doSelectToCurrency = value => ({
  type: SELECT_TO_CURRENCY,
  toCurrency: value,
});
export { doSelectBaseCurrency, doSelectToCurrency };
