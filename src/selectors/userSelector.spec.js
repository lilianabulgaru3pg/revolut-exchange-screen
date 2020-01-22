import {
  getBaseSymbol,
  getToSymbol,
  getBaseBalance,
  getToBalance,
} from './userSelector';

import {
  DEFAULT_TO_CURRENCY,
  USER_DEFAULT_BASE_CURRENCY,
  SYMBOL,
  CURRENCIES,
} from '../constants/CommonConstants';

const STATE = {
  balance: [
    {
      currency: 'GBP',
      balance: 111,
      symbol: SYMBOL.GBP,
    },
    {
      currency: 'USD',
      balance: 200,
      symbol: SYMBOL.USD,
    },
    {
      currency: 'EUR',
      balance: 30,
      symbol: SYMBOL.EUR,
    },
  ],
  fromAccount: {
    currency: CURRENCIES[USER_DEFAULT_BASE_CURRENCY],
    balance: 111,
    symbol: SYMBOL[USER_DEFAULT_BASE_CURRENCY],
  },
  toAccount: {
    currency: CURRENCIES[DEFAULT_TO_CURRENCY],
    balance: 30,
    symbol: SYMBOL[DEFAULT_TO_CURRENCY],
  },
};

describe('user selector', () => {
  it('retrieves formated base balance', () => {
    const state = { user: STATE };
    const expectedBaseBalanceAsAString = ` 111.00 £`;
    const baseBalanceString = getBaseSymbol(state);
    expect(baseBalanceString).toEqual(expectedBaseBalanceAsAString);
  });
  it('retrieves formated balance amount of the exchange currency ', () => {
    const state = { user: STATE };
    const expectedBalanceAsAString = ` 30.00 €`;
    const balanceString = getToSymbol(state);
    expect(balanceString).toEqual(expectedBalanceAsAString);
  });

  it('retrieves base balance', () => {
    const state = { user: STATE };
    const expectedBaseBalance = 111;
    const baseBalanceNumber = getBaseBalance(state);
    expect(baseBalanceNumber).toEqual(expectedBaseBalance);
  });

  it('retrieves to balance', () => {
    const state = { user: STATE };
    const expectedToBalance = 30;
    const toBalanceNumber = getToBalance(state);
    expect(toBalanceNumber).toEqual(expectedToBalance);
  });
});
