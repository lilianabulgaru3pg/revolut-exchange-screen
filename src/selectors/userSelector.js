const getBaseSymbol = ({
  user: {
    fromAccount: { balance, symbol },
  },
}) => `${balance}${symbol}`;

const getToSymbol = ({
  user: {
    toAccount: { balance, symbol },
  },
}) => `${balance}${symbol}`;

export { getBaseSymbol, getToSymbol };
