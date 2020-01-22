import {
  DISABLE_EXCHANGE_BTN,
  ENABLE_EXCHANGE_BTN,
} from '../constants/actionTypes';

const doDisableBtn = () => ({
  type: DISABLE_EXCHANGE_BTN,
});

const doEnableBtn = () => ({
  type: ENABLE_EXCHANGE_BTN,
});
export { doDisableBtn, doEnableBtn };
