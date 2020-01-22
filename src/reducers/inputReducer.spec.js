import deepFreeze from 'deep-freeze';
import inputReducer from './inputReducer';
import {
  inputFromType,
  inputToType,
} from '../constants/CommonConstants';
import {
  INPUT_FROM,
  INPUT_TO,
  DISPLAY_INPUT_FROM,
  DISPLAY_INPUT_TO,
  RESET_INPUTS,
} from '../constants/actionTypes';

describe('input reducer', () => {
  it('adds input of type:from to input state', () => {
    const fromInput = 10;
    const action = {
      type: INPUT_FROM,
      from: fromInput,
      name: inputFromType,
    };
    const previousState = { to: 0, from: 0 };
    const expectedNewState = { to: 0, from: fromInput };

    deepFreeze(previousState);
    const newState = inputReducer(previousState, action);
    expect(newState).toEqual(expectedNewState);
  });

  it('adds input of type:to to input state', () => {
    const toInput = 10;
    const action = {
      type: INPUT_TO,
      to: toInput,
      name: inputToType,
    };
    const previousState = { to: 0, from: 0 };
    const expectedNewState = { to: toInput, from: 0 };

    deepFreeze(previousState);
    const newState = inputReducer(previousState, action);
    expect(newState).toEqual(expectedNewState);
  });

  it('adds converted input of type:to to input state', () => {
    const toInput = 11.1;
    const action = { type: DISPLAY_INPUT_TO, to: toInput };

    const previousState = { to: 0, from: 0 };
    const expectedNewState = { to: toInput, from: 0 };

    deepFreeze(previousState);
    const newState = inputReducer(previousState, action);
    expect(newState).toEqual(expectedNewState);
  });

  it('adds converted input of type:from to input state', () => {
    const fromInput = 11.1;
    const action = { type: DISPLAY_INPUT_FROM, from: fromInput };

    const previousState = { to: 0, from: 0 };
    const expectedNewState = { to: 0, from: fromInput };

    deepFreeze(previousState);
    const newState = inputReducer(previousState, action);
    expect(newState).toEqual(expectedNewState);
  });

  it('resets the input state', () => {
    const action = { type: RESET_INPUTS };

    const previousState = { to: 10, from: 10 };
    const expectedNewState = { to: 0, from: 0 };

    deepFreeze(previousState);
    const newState = inputReducer(previousState, action);
    expect(newState).toEqual(expectedNewState);
  });
});
