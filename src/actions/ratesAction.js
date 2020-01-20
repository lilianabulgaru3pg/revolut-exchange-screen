import { RATES_ADD, RATES_FETCH } from '../constants/actionTypes';

const doAddRates = rates => ({
  type: RATES_ADD,
  rates,
});
const doFetchRateForCurrency = query => ({
  type: RATES_FETCH,
  query,
});

export { doAddRates, doFetchRateForCurrency };
