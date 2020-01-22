import deepFreeze from 'deep-freeze';
import exchangeBtnReducer from './exchangeReducer';
import {
  ENABLE_EXCHANGE_BTN,
  DISABLE_EXCHANGE_BTN,
} from '../constants/actionTypes';

describe('exchangeBtn reducer', () => {
  it('disables button state', () => {
    const action = {
      type: DISABLE_EXCHANGE_BTN,
    };
    const previousState = { isDisabled: false };
    const expectedNewState = { isDisabled: true };

    deepFreeze(previousState);
    const newState = exchangeBtnReducer(previousState, action);
    expect(newState).toEqual(expectedNewState);
  });

  it('enables button state', () => {
    const action = {
      type: ENABLE_EXCHANGE_BTN,
    };
    const previousState = { isDisabled: true };
    const expectedNewState = { isDisabled: false };

    deepFreeze(previousState);
    const newState = exchangeBtnReducer(previousState, action);
    expect(newState).toEqual(expectedNewState);
  });
});
