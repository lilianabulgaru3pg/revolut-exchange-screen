import { call, put, delay } from 'redux-saga/effects';

import {
  doAddRates,
  doFetchRateForCurrency,
} from '../actions/ratesAction';
import fetchRates from '../api/ratesApi';

function* handleFetchRates(action) {
  const { query } = action;
  while (true) {
    const result = yield call(fetchRates, query);
    yield put(doAddRates(result.rates));
    yield delay(10000);
    yield put(doFetchRateForCurrency(query));
  }
}

export default handleFetchRates;
