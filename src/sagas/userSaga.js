import { put, select } from 'redux-saga/effects';
import {
  doExchangeBalance,
  doChangeBaseSymbol,
  doChangeToSymbol,
} from '../actions/userAction';
import { getInputFrom, getInputTo } from '../selectors/inputSelector';
import { getRate } from '../selectors/rateSelector';
import {
  getBaseCurrency,
  getToCurrency,
} from '../selectors/selectCurrencySelector';
import { doResetInputs } from '../actions/inputAction';

function* handleExchange() {
  const from = yield select(getBaseCurrency);
  const to = yield select(getToCurrency);
  const rate = yield select(getRate);
  const amountFrom = yield select(getInputFrom);
  const amountTo = yield select(getInputTo);

  console.log(
    'from, to, amountFrom, amountTo, rate',
    from,
    to,
    amountFrom,
    amountTo,
    rate,
  );
  yield put(doExchangeBalance(from, to, amountFrom, amountTo, rate));
}

function* handleExchangeBalance() {
  const from = yield select(getBaseCurrency);
  const to = yield select(getToCurrency);
  yield put(doResetInputs());
  yield put(doChangeBaseSymbol(from));
  yield put(doChangeToSymbol(to));
}

export { handleExchange, handleExchangeBalance };
