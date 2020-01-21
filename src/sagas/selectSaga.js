import { put } from 'redux-saga/effects';
import {
  doChangeBaseSymbol,
  doChangeToSymbol,
} from '../actions/userAction';
import { doFetchRateForCurrency } from '../actions/ratesAction';
import {
  doSelectToCurrency,
  doSelectBaseCurrency,
} from '../actions/selectAction';

// import { doDisplayInputChange } from '../actions/inputAction';

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
}

export { handleToCurrency, handleBaseCurrency };
