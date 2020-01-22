const getBaseSymbol = ({
  user: {
    fromAccount: { balance, symbol },
  },
}) => ` ${balance.toFixed(2)} ${symbol}`;

const getToSymbol = ({
  user: {
    toAccount: { balance, symbol },
  },
}) => ` ${balance.toFixed(2)} ${symbol}`;

const getBaseBalance = ({
  user: {
    fromAccount: { balance },
  },
}) => balance;

const getToBalance = ({
  user: {
    toAccount: { balance },
  },
}) => balance;

export { getBaseSymbol, getToSymbol, getBaseBalance, getToBalance };
