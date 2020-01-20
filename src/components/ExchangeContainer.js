import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import Header from './Header';
import ExchangeCard from './ExchangeCard';
import RateData from './RateData';
import ExchangeButton from './ExchangeButton';
import {
  doSelectBaseCurrency,
  doSelectToCurrency,
} from '../actions/selectAction';
// import { doEnableBtn, doDisableBtn } from '../actions/exchangeAction';
import {
  getBaseCurrency,
  getToCurrency,
} from '../selectors/selectCurrencySelector';
import getExchangeBtnState from '../selectors/exchangeSelector';
import {
  getBaseSymbol,
  getToSymbol,
} from '../selectors/userSelector';
import {
  CURRENCIES,
  exchangeTitle,
} from '../constants/CommonConstants';

import getRateCurrency from '../selectors/rateSelector';
import { doFetchRateForCurrency } from '../actions/ratesAction';

class ExchangeContainer extends Component {
  componentDidMount() {
    const { getRate, baseCurrency, toCurrency } = this.props;
    getRate({ from: baseCurrency, to: toCurrency });
  }

  render() {
    const {
      onBaseCurrencyChange,
      onToCurrencyChange,
      onExchangeBtnClick,
      baseCurrency,
      toCurrency,
      disabled,
      baseBalance,
      toBalance,
      baseInput,
      toInput,
      rate,
    } = this.props;

    return (
      <Container maxWidth="sm">
        <Grid>
          <Grid item sm={12}>
            <Header title={exchangeTitle} />
          </Grid>
          <ExchangeCard
            currency={baseCurrency}
            onCurrencyChange={onBaseCurrencyChange}
            balance={baseBalance}
            value={baseInput}
            currencies={CURRENCIES}
            id="select-base-currency"
          />
          <RateData rate={rate} />
          <ExchangeCard
            currency={toCurrency}
            onCurrencyChange={onToCurrencyChange}
            balance={toBalance}
            value={toInput}
            currencies={CURRENCIES}
            id="select-to-currency"
          />
          <ExchangeButton
            onClick={onExchangeBtnClick}
            disabled={disabled}
            title={exchangeTitle}
          />
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  baseCurrency: getBaseCurrency(state),
  toCurrency: getToCurrency(state),
  disabled: getExchangeBtnState(state),
  baseBalance: getBaseSymbol(state),
  toBalance: getToSymbol(state),
  rate: getRateCurrency(state),
});

const mapDispatchToProps = dispatch => ({
  onBaseCurrencyChange: value =>
    dispatch(doSelectBaseCurrency(value)),
  onToCurrencyChange: value => dispatch(doSelectToCurrency(value)),
  onExchangeBtnClick: () => dispatch(),
  getRate: query => dispatch(doFetchRateForCurrency(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExchangeContainer);
