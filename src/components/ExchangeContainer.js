/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
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

class ExchangeContainer extends PureComponent {
  componentDidMount() {
    const { getRate, baseCurrency, toCurrency } = this.props;
    getRate({ from: baseCurrency, to: toCurrency });
  }

  render() {
    const {
      onToCurrencyChange,
      onBaseCurrencyChange,
      onExchangeBtnClick,
      baseCurrency,
      toCurrency,
      disabled,
      baseBalance,
      toBalance,
      baseInput,
      toInput,
      rates,
    } = this.props;

    return (
      <Container maxWidth="sm">
        <Grid>
          <Grid item sm={12}>
            <Header title={exchangeTitle} />
          </Grid>
          <ExchangeCard
            currency={baseCurrency}
            onCurrencyChange={from =>
              onBaseCurrencyChange({
                prev: baseCurrency,
                from,
                to: toCurrency,
              })}
            balance={baseBalance}
            value={baseInput}
            currencies={CURRENCIES}
            id="select-base-currency"
          />
          <RateData rate={rates} />
          <ExchangeCard
            currency={toCurrency}
            onCurrencyChange={to =>
              onToCurrencyChange({
                from: baseCurrency,
                to,
                prev: toCurrency,
              })}
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
  rates: getRateCurrency(state),
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
