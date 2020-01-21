import { call, put, delay } from 'redux-saga/effects';

import {
  doAddRates,
  doFetchRateForCurrency,
} from '../actions/ratesAction';
import fetchRates from '../api/ratesApi';
// import { FETCH_INTERVAL } from '../constants/CommonConstants';

function* handleFetchRates(action) {
  const { query } = action;
  while (true) {
    const result = yield call(fetchRates, query);
    yield put(doAddRates(result.rates));
    yield delay(100000); // should change to FETCH_INTERVAL
    yield put(doFetchRateForCurrency(query));
  }
}

export default handleFetchRates;
