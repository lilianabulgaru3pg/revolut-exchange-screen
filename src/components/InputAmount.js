import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const AmountInput = ({
  classes,
  autoFocus,
  value,
  onInputChange,
}) => {
  return (
    <TextField
      className={classes}
      margin="normal"
      autoCapitalize="off"
      autoComplete="off"
      autoCorrect="off"
      onChange={e => onInputChange(e)}
      // onFocus: () => setFocued(true),
      // onBlur: () => setFocued(false),
      pattern="[0-9.]*"
      spellCheck={false}
      type="text"
      value={value}
      autoFocus={autoFocus}
    />
  );
};

AmountInput.propTypes = {
  onInputChange: PropTypes.func,
  classes: PropTypes.string,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
};

AmountInput.defaultProps = {
  onInputChange: () => {},
  classes: '',
  autoFocus: false,
  value: '',
};

export default AmountInput;
