const CURRENCIES = {
  EUR: 'EUR',
  USD: 'USD',
  GBP: 'GBP',
};

const SYMBOL = {
  EUR: '€',
  USD: '$',
  GBP: '£',
};

const EB_BASE_URL = 'https://api.exchangeratesapi.io';

const ENABLE_EXCHANGE_BTN = 'ENABLE_EXCHANGE_BTN';
const DISABLE_EXCHANGE_BTN = 'DISABLE_EXCHANGE_BTN';

const DEFAULT_TO_CURRENCY = 'EUR';
const USER_DEFAULT_BASE_CURRENCY = 'GBP';

const SELECT_BASE_CURRENCY = 'SELECT_BASE_CURRENCY';
const SELECT_TO_CURRENCY = 'SELECT_TO_CURRENCY';

const availableBalace = 500;
const exchangeTitle = 'Exchange';

const inputFromType = 'from';
const inputToType = 'to';

const FETCH_INTERVAL = 10000;

export {
  SYMBOL,
  CURRENCIES,
  FETCH_INTERVAL,
  DEFAULT_TO_CURRENCY,
  USER_DEFAULT_BASE_CURRENCY,
  SELECT_BASE_CURRENCY,
  SELECT_TO_CURRENCY,
  availableBalace,
  exchangeTitle,
  ENABLE_EXCHANGE_BTN,
  DISABLE_EXCHANGE_BTN,
  EB_BASE_URL,
  inputFromType,
  inputToType,
};
