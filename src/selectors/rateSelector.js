const getRateInfo = ({
  user: {
    fromAccount: { symbol: from },
    toAccount: { symbol: to, currency },
  },
  rates,
}) =>
  `1${from} = ${
    rates[currency] ? rates[currency].toFixed(4) : rates[currency]
  } ${to}`;

const getRate = ({
  user: {
    toAccount: { currency },
  },
  rates,
}) => rates[currency];

export { getRateInfo, getRate };
