import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Grid } from '@material-ui/core';

const Select = withStyles({
  root: {
    width: '6rem',
    '& .MuiInput-underline': {
      '&:hover:before': {
        borderBottom: 'none',
      },
      '&:before': {
        borderBottom: 'none',
      },
    },
  },
})(TextField);

const SelectCurrency = ({
  id,
  currency,
  currencies,
  onCurrencyChange,
}) => (
  <Grid container>
    <Grid item sm={12}>
      <Select
        id={id}
        select
        value={currency}
        onChange={e => onCurrencyChange(e.target.value)}
      >
        {Object.keys(currencies).map(key => (
          <MenuItem key={key} value={currencies[key]}>
            {currencies[key]}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  </Grid>
);

export default SelectCurrency;
