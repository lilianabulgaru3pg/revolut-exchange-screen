import deepFreeze from 'deep-freeze';
import ratesReducer from './ratesReducer';

import { RATES_ADD } from '../constants/actionTypes';
import { USER_DEFAULT_BASE_CURRENCY } from '../constants/CommonConstants';

const INITIAL_STATE = {
  [USER_DEFAULT_BASE_CURRENCY]: 1.0,
};

describe('rates reducer', () => {
  it('disables button state', () => {
    const rates = { EUR: 1.117 };
    const action = {
      type: RATES_ADD,
      rates,
    };
    const previousState = INITIAL_STATE;
    const expectedNewState = rates;

    deepFreeze(previousState);
    const newState = ratesReducer(previousState, action);
    expect(newState).toEqual(expectedNewState);
  });
});
