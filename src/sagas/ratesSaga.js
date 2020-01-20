import { call, put } from 'redux-saga/effects';
import { doAddRates } from '../actions/ratesAction';
import fetchRates from '../api/ratesApi';

function* handleFetchRates(action) {
  const { query } = action;
  const result = yield call(fetchRates, query);
  yield put(doAddRates(result.rates));
}
export default handleFetchRates;
