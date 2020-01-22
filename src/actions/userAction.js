import {
  SELECT_TO_SYMBOL,
  SELECT_BASE_SYMBOL,
  EXCHANGE,
  EXCHANGE_BALANCE,
} from '../constants/actionTypes';

const doChangeBaseSymbol = value => ({
  type: SELECT_BASE_SYMBOL,
  baseCurrency: value,
});

const doChangeToSymbol = value => ({
  type: SELECT_TO_SYMBOL,
  toCurrency: value,
});

const doExchange = () => ({
  type: EXCHANGE,
});

const doExchangeBalance = (from, to, amountFrom, amountTo, rate) => ({
  type: EXCHANGE_BALANCE,
  from,
  to,
  amountFrom,
  amountTo,
  rate,
});

export {
  doChangeBaseSymbol,
  doChangeToSymbol,
  doExchange,
  doExchangeBalance,
};
