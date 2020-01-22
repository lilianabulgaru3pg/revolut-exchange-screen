import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import {
  RATES_FETCH,
  SELECT_BASE_CURRENCY,
  SELECT_TO_CURRENCY,
  INPUT_FROM,
  INPUT_TO,
  EXCHANGE,
  EXCHANGE_BALANCE,
} from '../constants/actionTypes';

import handleFetchRates from './ratesSaga';
import { handleToCurrency, handleBaseCurrency } from './selectSaga';
import { handleInputFrom, handleInputTo } from './inputSaga';
import { handleExchange, handleExchangeBalance } from './userSaga';

function* watchAll() {
  yield all([
    takeLatest(RATES_FETCH, handleFetchRates),
    takeEvery(SELECT_BASE_CURRENCY, handleBaseCurrency),
    takeEvery(SELECT_TO_CURRENCY, handleToCurrency),
    takeEvery(INPUT_FROM, handleInputFrom),
    takeEvery(INPUT_TO, handleInputTo),
    takeEvery(EXCHANGE, handleExchange),
    takeEvery(EXCHANGE_BALANCE, handleExchangeBalance),
  ]);
}
export default watchAll;
