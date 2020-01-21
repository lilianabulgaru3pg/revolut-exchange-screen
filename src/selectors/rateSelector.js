const getRateCurrency = ({
  user: {
    fromAccount: { symbol: from },
    toAccount: { symbol: to, currency },
  },
  rates,
}) =>
  `1${from} = ${
    rates[currency] ? rates[currency].toFixed(4) : rates[currency]
  } ${to}`;

export default getRateCurrency;
