import {
  INPUT_FROM,
  INPUT_TO,
  DISPLAY_INPUT_FROM,
  DISPLAY_INPUT_TO,
  RESET_INPUTS,
} from '../constants/actionTypes';
import { inputFromType } from '../constants/CommonConstants';

const doInputChange = ({ val, name }) =>
  name === inputFromType
    ? { type: INPUT_FROM, from: Number(val), name }
    : { type: INPUT_TO, to: Number(val), name };

const doDisplayInputChange = ({ value, name }) =>
  name === inputFromType
    ? { type: DISPLAY_INPUT_TO, to: value }
    : { type: DISPLAY_INPUT_FROM, from: value };

const doResetInputs = () => ({ type: RESET_INPUTS });

export { doInputChange, doDisplayInputChange, doResetInputs };
