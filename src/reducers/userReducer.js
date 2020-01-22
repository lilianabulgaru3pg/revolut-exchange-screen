import {
  DEFAULT_TO_CURRENCY,
  USER_DEFAULT_BASE_CURRENCY,
  SYMBOL,
} from '../constants/CommonConstants';

import {
  SELECT_TO_SYMBOL,
  SELECT_BASE_SYMBOL,
  EXCHANGE,
  EXCHANGE_BALANCE,
} from '../constants/actionTypes';

const initialBalance = [
  {
    currency: 'GBP',
    balance: 500,
    symbol: SYMBOL.GBP,
  },
  {
    currency: 'USD',
    balance: 570,
    symbol: SYMBOL.USD,
  },
  {
    currency: 'EUR',
    balance: 430,
    symbol: SYMBOL.EUR,
  },
];

const fromAccount = initialBalance.find(
  item => item.currency === USER_DEFAULT_BASE_CURRENCY,
);
const toAccount = initialBalance.find(
  item => item.currency === DEFAULT_TO_CURRENCY,
);

const INITIAL_STATE = {
  balance: initialBalance,
  fromAccount,
  toAccount,
};

const selectBaseSymbol = (state, action) => ({
  ...state,
  fromAccount: state.balance.find(
    account => account.currency === action.baseCurrency,
  ),
});

const selectToSymbol = (state, action) => ({
  ...state,
  toAccount: state.balance.find(
    account => account.currency === action.toCurrency,
  ),
});

const exchange = state => state;

const exchangeBalance = (state, action) => {
  const { from, to, amountFrom, amountTo } = action;
  return {
    ...state,
    balance: state.balance.map(account => {
      if (account.currency === from)
        return {
          ...account,
          balance: account.balance - amountFrom,
        };
      if (account.currency === to)
        return {
          ...account,
          balance: account.balance + amountTo,
        };

      return account;
    }),
  };
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_TO_SYMBOL:
      return selectToSymbol(state, action);
    case SELECT_BASE_SYMBOL:
      return selectBaseSymbol(state, action);
    case EXCHANGE:
      return exchange(state);
    case EXCHANGE_BALANCE:
      return exchangeBalance(state, action);
    default:
      return state;
  }
}
export default userReducer;
