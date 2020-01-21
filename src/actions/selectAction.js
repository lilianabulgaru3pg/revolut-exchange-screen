import {
  SELECT_BASE_CURRENCY,
  SELECT_TO_CURRENCY,
} from '../constants/CommonConstants';

const doSelectBaseCurrency = ({ from, to, prev }) => ({
  type: SELECT_BASE_CURRENCY,
  baseCurrency: from,
  toCurrency: to,
  prev,
});

const doSelectToCurrency = ({ from, to, prev }) => ({
  type: SELECT_TO_CURRENCY,
  baseCurrency: from,
  toCurrency: to,
  prev,
});
export { doSelectBaseCurrency, doSelectToCurrency };
