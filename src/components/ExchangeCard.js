import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import SelectCurrency from './SelectCurrency';
import CurrentBalance from './CurrentBalance';
import InputAmount from './InputAmount';

const ExchangeCard = ({
  balance,
  value,
  currency,
  onCurrencyChange,
  id,
  currencies,
}) => (
  <Grid container>
    <Grid item sm={6}>
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
    <Grid item sm={6}>
      <InputAmount value={value} />
    </Grid>
  </Grid>
);

ExchangeCard.propTypes = {
  onCurrencyChange: PropTypes.func.isRequired,
  balance: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default ExchangeCard;
