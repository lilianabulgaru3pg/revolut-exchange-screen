import { put, select } from 'redux-saga/effects';
import { doDisplayInputChange } from '../actions/inputAction';
import {
  getBaseBalance,
  getToBalance,
} from '../selectors/userSelector';
import { getRate } from '../selectors/rateSelector';
import { doEnableBtn, doDisableBtn } from '../actions/exchangeAction';

function* handleInputFrom(action) {
  const { from, name } = action;
  const rate = yield select(getRate);

  yield put(
    doDisplayInputChange({
      name,
      value: rate * Number(from),
    }),
  );

  const balance = yield select(getBaseBalance);
  if (balance > from) {
    yield put(doEnableBtn());
  } else {
    yield put(doDisableBtn());
  }
}

function* handleInputTo(action) {
  const { to, name } = action;
  const rate = yield select(getRate);

  yield put(
    doDisplayInputChange({
      name,
      value: Number(to) / rate,
    }),
  );
  const balance = yield select(getToBalance);
  if (balance > to) {
    yield put(doEnableBtn());
  } else {
    yield put(doDisableBtn());
  }
}

export { handleInputFrom, handleInputTo };
