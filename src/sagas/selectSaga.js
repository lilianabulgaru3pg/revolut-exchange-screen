import { put } from 'redux-saga/effects';
import {
  doChangeBaseSymbol,
  doChangeToSymbol,
} from '../actions/userAction';

function* handleBaseCurrency(action) {
  const { baseCurrency } = action;
  yield put(doChangeBaseSymbol(baseCurrency));
}
function* handleToCurrency(action) {
  const { toCurrency } = action;
  yield put(doChangeToSymbol(toCurrency));
}

export { handleToCurrency, handleBaseCurrency };
