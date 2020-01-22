import {
  doChangeBaseSymbol,
  doChangeToSymbol,
  doExchangeBalance,
} from './userAction';
import { CURRENCIES } from '../constants/CommonConstants';
import {
  SELECT_TO_SYMBOL,
  SELECT_BASE_SYMBOL,
  EXCHANGE_BALANCE,
} from '../constants/actionTypes';

describe('user action', () => {
  it('is an action that changes the symbol and the amout of the balance when the current currency is changed ', () => {
    const eur = CURRENCIES.EUR;
    const expectedAction = {
      type: SELECT_BASE_SYMBOL,
      baseCurrency: eur,
    };
    const action = doChangeBaseSymbol(eur);
    expect(action).toEqual(expectedAction);
  });

  it('is an action that changes the symbol and the amout of the balance when the exchange currency is changed ', () => {
    const eur = CURRENCIES.EUR;
    const expectedAction = {
      type: SELECT_TO_SYMBOL,
      toCurrency: eur,
    };
    const action = doChangeToSymbol(eur);
    expect(action).toEqual(expectedAction);
  });

  it('is an action that changes the balance amount after exchange', () => {
    const { from, to, amountFrom, amountTo, rate } = {
      from: CURRENCIES.EUR,
      to: CURRENCIES.GBP,
      amountFrom: 120,
      amountTo: 60,
      rate: 0.5,
    };
    const expectedAction = {
      type: EXCHANGE_BALANCE,
      from,
      to,
      amountFrom,
      amountTo,
      rate,
    };
    const action = doExchangeBalance(
      from,
      to,
      amountFrom,
      amountTo,
      rate,
    );
    expect(action).toEqual(expectedAction);
  });
});
