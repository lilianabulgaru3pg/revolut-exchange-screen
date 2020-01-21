import { combineReducers } from 'redux';
import ratesReducer from './ratesReducer';
import exchangeBtnReducer from './exchangeReducer';
import selectCurrencyReducer from './selectCurrencyReducer';
import userReducer from './userReducer';
import inputReducer from './inputReducer';

const rootReducer = combineReducers({
  rates: ratesReducer,
  exchangeBtn: exchangeBtnReducer,
  currency: selectCurrencyReducer,
  user: userReducer,
  input: inputReducer,
});
export default rootReducer;
