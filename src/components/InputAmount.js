import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const AmountInput = ({
  classes,
  autoFocus,
  inputVal,
  onInputChange,
}) => {
  return (
    <TextField
      className={classes}
      margin="normal"
      autoCapitalize="off"
      autoComplete="off"
      autoCorrect="off"
      onChange={({ target: { value } }) => onInputChange(value)}
      pattern="[0-9.]*"
      spellCheck={false}
      type="text"
      value={inputVal}
      autoFocus={autoFocus}
      placeholder="0"
    />
  );
};

AmountInput.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
  autoFocus: PropTypes.bool,
  inputVal: PropTypes.string.isRequired,
};

AmountInput.defaultProps = {
  classes: '',
  autoFocus: false,
};

export default AmountInput;
