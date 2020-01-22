import { put, select, take } from 'redux-saga/effects';
import {
  doChangeBaseSymbol,
  doChangeToSymbol,
} from '../actions/userAction';
import { doFetchRateForCurrency } from '../actions/ratesAction';
import {
  doSelectToCurrency,
  doSelectBaseCurrency,
} from '../actions/selectAction';
import { doDisplayInputChange } from '../actions/inputAction';
import { getRate } from '../selectors/rateSelector';
import { getInputFrom } from '../selectors/inputSelector';
import { inputFromType } from '../constants/CommonConstants';
import { RATES_ADD } from '../constants/actionTypes';

function* handleBaseCurrency(action) {
  const { baseCurrency, toCurrency, prev } = action;

  let to = toCurrency;
  if (baseCurrency === toCurrency) {
    yield put(doChangeToSymbol(prev));
    yield put(
      doSelectToCurrency({
        from: baseCurrency,
        to: prev,
        prev: toCurrency,
      }),
    );
    to = prev;
  }
  yield put(doChangeBaseSymbol(baseCurrency));

  yield put(doFetchRateForCurrency({ from: baseCurrency, to }));

  const addRateAction = yield take([RATES_ADD]);
  if (addRateAction) {
    const rate = yield select(getRate);
    const from = yield select(getInputFrom);
    yield put(
      doDisplayInputChange({
        value: rate * from,
        name: inputFromType,
      }),
    );
  }
}
function* handleToCurrency(action) {
  const { baseCurrency, toCurrency, prev } = action;

  let from = baseCurrency;
  if (baseCurrency === toCurrency) {
    yield put(doChangeBaseSymbol(prev));
    yield put(
      doSelectBaseCurrency({
        from: prev,
        to: toCurrency,
        prev: baseCurrency,
      }),
    );
    from = prev;
  }
  yield put(doChangeToSymbol(toCurrency));

  yield put(doFetchRateForCurrency({ from, to: toCurrency }));
  const addRateAction = yield take([RATES_ADD]);
  if (addRateAction) {
    const fromInput = yield select(getInputFrom);
    const rate = yield select(getRate);

    yield put(
      doDisplayInputChange({
        value: rate * fromInput,
        name: inputFromType,
      }),
    );
  }
}

export { handleToCurrency, handleBaseCurrency };
