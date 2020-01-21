import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import {
  RATES_FETCH,
  SELECT_BASE_CURRENCY,
  SELECT_TO_CURRENCY,
} from '../constants/actionTypes';
import handleFetchRates from './ratesSaga';
import { handleToCurrency, handleBaseCurrency } from './selectSaga';

function* watchAll() {
  yield all([
    takeLatest(RATES_FETCH, handleFetchRates),
    takeEvery(SELECT_BASE_CURRENCY, handleBaseCurrency),
    takeEvery(SELECT_TO_CURRENCY, handleToCurrency),
  ]);
}
export default watchAll;
