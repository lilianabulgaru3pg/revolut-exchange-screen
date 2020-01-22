const getRateInfo = ({
  user: {
    fromAccount: { symbol: from },
    toAccount: { symbol: to, currency },
  },
  rates,
}) =>
  `1${from} = ${
    rates[currency] ? rates[currency].toFixed(4) : ''
  } ${to}`;

const getRate = ({
  user: {
    toAccount: { currency },
  },
  rates,
}) => rates[currency];

export { getRateInfo, getRate };
