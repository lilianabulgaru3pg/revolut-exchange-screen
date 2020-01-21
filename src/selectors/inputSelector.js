const formatInput = val =>
  (val === 0 ? 0 : val.toFixed(2)).toString();

const getInputFrom = state => formatInput(state.input.from);
const getInputTo = state => formatInput(state.input.to);

export { getInputFrom, getInputTo };
