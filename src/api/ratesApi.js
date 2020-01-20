import { EB_BASE_URL } from '../constants/CommonConstants';

// latest?base=USD&symbols=RON,USD

const fetchRates = ({ from, to }) => {
  const URL = `${EB_BASE_URL}/latest?base=${from}&symbols=${to}`;
  console.log('url', URL);
  return fetch(URL).then(response => response.json());
};
export default fetchRates;
