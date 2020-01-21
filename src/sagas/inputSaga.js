import { put } from 'redux-saga/effects';
import { doDisplayInputChange } from '../actions/inputAction';

function* handleInputFrom(action) {
  const { from, rate, name } = action;
  console.log(
    'val, rate, type',
    from,
    rate,
    name,
    rate * Number(from),
  );
  yield put(
    doDisplayInputChange({
      name,
      value: rate * Number(from),
    }),
  );
}

function* handleInputTo(action) {
  const { to, rate, name } = action;
  console.log('val, rate, type', to, rate, name, Number(to) / rate);

  yield put(
    doDisplayInputChange({
      name,
      value: Number(to) / rate,
    }),
  );
}

export { handleInputFrom, handleInputTo };
