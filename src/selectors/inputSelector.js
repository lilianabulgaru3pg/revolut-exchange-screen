const formatInput = val =>
  (val === 0 ? 0 : val.toFixed(2)).toString();

const getInputFrom = state => state.input.from;
const getInputTo = state => state.input.to;

export { getInputFrom, getInputTo };
