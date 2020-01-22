import { put, select } from 'redux-saga/effects';
import { doDisplayInputChange } from '../actions/inputAction';

import { getRate } from '../selectors/rateSelector';

function* handleInputFrom(action) {
  const { from, name } = action;
  const rate = yield select(getRate);

  yield put(
    doDisplayInputChange({
      name,
      value: rate * Number(from),
    }),
  );
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
}

export { handleInputFrom, handleInputTo };
