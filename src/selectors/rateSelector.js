const getRateCurrency = ({
  user: {
    fromAccount: { symbol: from },
    toAccount: { symbol: to, currency },
  },
  rates,
}) => `1${from} = ${rates[currency]} ${to}`;

export default getRateCurrency;
