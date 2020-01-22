import deepFreeze from 'deep-freeze';
import userReducer from './userReducer';
import {
  DEFAULT_TO_CURRENCY,
  USER_DEFAULT_BASE_CURRENCY,
  SYMBOL,
  CURRENCIES,
} from '../constants/CommonConstants';

import {
  SELECT_TO_SYMBOL,
  SELECT_BASE_SYMBOL,
  EXCHANGE_BALANCE,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  balance: [
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
  ],
  fromAccount: {
    currency: CURRENCIES[USER_DEFAULT_BASE_CURRENCY],
    balance: 500,
    symbol: SYMBOL[USER_DEFAULT_BASE_CURRENCY],
  },
  toAccount: {
    currency: CURRENCIES[DEFAULT_TO_CURRENCY],
    balance: 430,
    symbol: SYMBOL[DEFAULT_TO_CURRENCY],
  },
};

describe('user reducer', () => {
  it('change fromAccount currency to the new selected', () => {
    const value = CURRENCIES.EUR;
    const action = {
      type: SELECT_BASE_SYMBOL,
      baseCurrency: value,
    };
    const previousState = INITIAL_STATE;
    const expectedNewState = {
      ...INITIAL_STATE,
      fromAccount: {
        currency: CURRENCIES[value],
        balance: 430,
        symbol: SYMBOL[value],
      },
    };

    deepFreeze(previousState);
    const newState = userReducer(previousState, action);
    expect(newState).toEqual(expectedNewState);
  });

  it('change toAccount currency to the new selected', () => {
    const value = CURRENCIES.EUR;
    const action = {
      type: SELECT_TO_SYMBOL,
      toCurrency: value,
    };
    const previousState = INITIAL_STATE;
    const expectedNewState = {
      ...INITIAL_STATE,
      toAccount: {
        currency: CURRENCIES[value],
        balance: 430,
        symbol: SYMBOL[value],
      },
    };

    deepFreeze(previousState);
    const newState = userReducer(previousState, action);
    expect(newState).toEqual(expectedNewState);
  });

  it('changes the balance after exchange ', () => {
    const { from, to, amountFrom, amountTo, rate } = {
      from: CURRENCIES.EUR,
      to: CURRENCIES.GBP,
      amountFrom: 1,
      amountTo: 1.5,
      rate: 1.5,
    };
    const action = {
      type: EXCHANGE_BALANCE,
      from,
      to,
      amountFrom,
      amountTo,
      rate,
    };
    const previousState = INITIAL_STATE;

    const expectedNewState = {
      ...INITIAL_STATE,
      balance: [
        {
          currency: 'GBP',
          balance: 500 + amountTo,
          symbol: SYMBOL.GBP,
        },
        {
          currency: 'USD',
          balance: 570,
          symbol: SYMBOL.USD,
        },
        {
          currency: 'EUR',
          balance: 430 - amountFrom,
          symbol: SYMBOL.EUR,
        },
      ],
    };

    deepFreeze(previousState);
    const newState = userReducer(previousState, action);
    expect(newState).toEqual(expectedNewState);
  });
});
