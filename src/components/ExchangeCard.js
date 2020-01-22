import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import SelectCurrency from './SelectCurrency';
import CurrentBalance from './CurrentBalance';
import InputAmount from './InputAmount';

import { inputFromType } from '../constants/CommonConstants';

const ExchangeCard = ({
  balance,
  inputVal,
  currency,
  onCurrencyChange,
  onInputChange,
  id,
  currencies,
  type,
  err,
}) => (
  <Grid container>
    <Grid item sm={6} xs={12}>
      <Grid container direction="column">
        <Grid item>
          <SelectCurrency
            id={id}
            currency={currency}
            currencies={currencies}
            onCurrencyChange={onCurrencyChange}
          />
        </Grid>
        <Grid item>
          <CurrentBalance balance={balance} err={err} />
        </Grid>
      </Grid>
    </Grid>
    <Grid item sm={6} xs={12}>
      <InputAmount
        inputVal={inputVal}
        onInputChange={onInputChange}
        autoFocus={type === inputFromType}
      />
    </Grid>
  </Grid>
);

ExchangeCard.propTypes = {
  onCurrencyChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  balance: PropTypes.string.isRequired,
  inputVal: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  err: PropTypes.bool.isRequired,
  currencies: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default ExchangeCard;
