import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import SelectCurrency from './SelectCurrency';
import CurrentBalance from './CurrentBalance';
import InputAmount from './InputAmount';

const ExchangeCard = ({
  balance,
  inputVal,
  currency,
  onCurrencyChange,
  onInputChange,
  id,
  currencies,
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
          <CurrentBalance balance={balance} err={false} />
        </Grid>
      </Grid>
    </Grid>
    <Grid item sm={6} xs={12} dir="rtl">
      <InputAmount
        inputVal={inputVal}
        onInputChange={onInputChange}
      />
    </Grid>
  </Grid>
);

ExchangeCard.propTypes = {
  onCurrencyChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  balance: PropTypes.string.isRequired,
  inputVal: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default ExchangeCard;
