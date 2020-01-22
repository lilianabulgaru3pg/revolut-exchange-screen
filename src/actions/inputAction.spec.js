import {
  INPUT_FROM,
  INPUT_TO,
  DISPLAY_INPUT_FROM,
  DISPLAY_INPUT_TO,
  RESET_INPUTS,
} from '../constants/actionTypes';
import {
  inputFromType,
  inputToType,
} from '../constants/CommonConstants';
import {
  doInputChange,
  doDisplayInputChange,
  doResetInputs,
} from './inputAction';

describe('input action', () => {
  it('triggers the right type input change action', () => {
    const { val, name } = { val: 2221, name: inputFromType };
    const expectedAction = {
      type: INPUT_FROM,
      from: Number(val),
      name,
    };

    const action = doInputChange({ val, name });
    expect(action).toEqual(expectedAction);
  });

  it('triggers the input type:to change action', () => {
    const { val, name } = { val: 101, name: inputToType };
    const expectedAction = { type: INPUT_TO, to: Number(val), name };

    const action = doInputChange({ val, name });
    expect(action).toEqual(expectedAction);
  });

  it('triggers the input change action for the changed from amount', () => {
    const { value, name } = { value: 9, name: inputToType };
    const expectedAction = { type: DISPLAY_INPUT_FROM, from: value };

    const action = doDisplayInputChange({ value, name });
    expect(action).toEqual(expectedAction);
  });

  it('triggers the input change action for the changed from amount', () => {
    const { value, name } = { value: 19, name: inputFromType };
    const expectedAction = { type: DISPLAY_INPUT_TO, to: value };

    const action = doDisplayInputChange({ value, name });
    expect(action).toEqual(expectedAction);
  });

  it('triggers the reset input', () => {
    const expectedAction = { type: RESET_INPUTS };

    const action = doResetInputs();
    expect(action).toEqual(expectedAction);
  });
});
