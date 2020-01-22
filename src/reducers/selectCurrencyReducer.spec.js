import deepFreeze from 'deep-freeze';
import selectCurrencyReducer from './selectCurrencyReducer';
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

describe('select currency reducer', () => {
  it('add base selected currency to state', () => {
    const base = { from: 'USD', to: 'EUR', prev: 'GBP' };
    const action = {
      type: SELECT_BASE_CURRENCY,
      baseCurrency: base.from,
      toCurrency: base.to,
      prev: base.prev,
    };
    const previousState = INITIAL_STATE;
    const expectedNewState = {
      baseCurrency: base.from,
      toCurrency: base.to,
    };

    deepFreeze(previousState);
    const newState = selectCurrencyReducer(previousState, action);
    expect(newState).toEqual(expectedNewState);
  });

  it('add "to" selected currency to state', () => {
    const { from, to, prev } = {
      from: 'GBP',
      to: 'USD',
      prev: 'EUR',
    };
    const action = {
      type: SELECT_TO_CURRENCY,
      baseCurrency: from,
      toCurrency: to,
      prev,
    };
    const previousState = INITIAL_STATE;
    const expectedNewState = {
      baseCurrency: from,
      toCurrency: to,
    };

    deepFreeze(previousState);
    const newState = selectCurrencyReducer(previousState, action);
    expect(newState).toEqual(expectedNewState);
  });

  it('swap currencies, if the "from" currency is the same as "to" currency', () => {
    const { from, to, prev } = {
      from: 'EUR',
      to: 'EUR',
      prev: 'GBP',
    };

    const action = {
      type: SELECT_BASE_CURRENCY,
      baseCurrency: from,
      toCurrency: to,
      prev,
    };
    const previousState = INITIAL_STATE;
    const expectedNewState = {
      baseCurrency: from,
      toCurrency: to,
    };

    deepFreeze(previousState);
    const newState = selectCurrencyReducer(previousState, action);
    expect(newState).toEqual(expectedNewState);
  });
});
