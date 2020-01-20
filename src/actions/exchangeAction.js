import {
  DISABLE_EXCHANGE_BTN,
  ENABLE_EXCHANGE_BTN,
} from '../constants/CommonConstants';

const doDisableBtn = value => ({
  type: DISABLE_EXCHANGE_BTN,
  isDisabled: value,
});

const doEnableBtn = value => ({
  type: ENABLE_EXCHANGE_BTN,
  isDisabled: value,
});
export { doDisableBtn, doEnableBtn };
