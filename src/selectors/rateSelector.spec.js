import { USER_DEFAULT_BASE_CURRENCY } from '../constants/CommonConstants';
import { getRate } from './rateSelector';

const STATE = {
  [USER_DEFAULT_BASE_CURRENCY]: 1.0,
};

describe('rate selector', () => {
  it('retrieves formated rate string', () => {
    const userState = {
      toAccount: { currency: USER_DEFAULT_BASE_CURRENCY },
    };
    const state = { rates: STATE, user: userState };
    const expectedRate = state.rates[USER_DEFAULT_BASE_CURRENCY];
    const rate = getRate(state);
    expect(rate).toEqual(expectedRate);
  });
});
