import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextField = styled.input`
  text-align: right;
  color: #1e90ff;
  caret-color: #1e90ff;
  border: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  background-color: transparent;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-input-placeholder {
    color: #b0c4de;
  }
  &:focus {
    outline: none;
  }
`;

const AmountInput = ({
  classes,
  autoFocus,
  inputVal,
  onInputChange,
}) => {
  return (
    <Typography component="div">
      <TextField
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        pattern="[0-9.]*"
        type="number"
        onChange={({ target: { value } }) => onInputChange(value)}
        value={inputVal > 0 ? inputVal : ''}
        autoFocus={autoFocus}
        className={classes}
        placeholder="0"
      />
    </Typography>
  );
};

AmountInput.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
  autoFocus: PropTypes.bool,
  inputVal: PropTypes.number.isRequired,
};

AmountInput.defaultProps = {
  classes: '',
  autoFocus: false,
};

export default AmountInput;
