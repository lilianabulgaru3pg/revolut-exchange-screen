import { combineReducers } from 'redux';
import ratesReducer from './ratesReducer';
import exchangeBtnReducer from './exchangeReducer';
import selectCurrencyReducer from './selectCurrencyReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  rates: ratesReducer,
  exchangeBtn: exchangeBtnReducer,
  currency: selectCurrencyReducer,
  user: userReducer,
});
export default rootReducer;
