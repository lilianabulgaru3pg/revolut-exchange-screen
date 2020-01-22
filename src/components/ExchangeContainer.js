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
  inputFromType,
  inputToType,
} from '../constants/CommonConstants';

import { getInputFrom, getInputTo } from '../selectors/inputSelector';
import { doInputChange } from '../actions/inputAction';
import { getRateInfo } from '../selectors/rateSelector';
import { doFetchRateForCurrency } from '../actions/ratesAction';

class ExchangeContainer extends PureComponent {
  componentDidMount() {
    const { fetchRate, baseCurrency, toCurrency } = this.props;
    fetchRate({ from: baseCurrency, to: toCurrency });
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
      inputFrom,
      inputTo,
      onInputChanges,
      rateInfo,
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
            inputVal={inputFrom}
            currencies={CURRENCIES}
            onInputChange={val =>
              onInputChanges({ val, name: inputFromType })}
            name={inputFromType}
            id="select-base-currency"
          />
          <RateData rate={rateInfo} />
          <ExchangeCard
            currency={toCurrency}
            onCurrencyChange={to =>
              onToCurrencyChange({
                from: baseCurrency,
                to,
                prev: toCurrency,
              })}
            balance={toBalance}
            inputVal={inputTo}
            currencies={CURRENCIES}
            onInputChange={val =>
              onInputChanges({ val, name: inputToType })}
            type={inputToType}
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
  rateInfo: getRateInfo(state),
  inputFrom: getInputFrom(state),
  inputTo: getInputTo(state),
});

const mapDispatchToProps = dispatch => ({
  onBaseCurrencyChange: value =>
    dispatch(doSelectBaseCurrency(value)),
  onToCurrencyChange: value => dispatch(doSelectToCurrency(value)),
  onExchangeBtnClick: () => dispatch(),
  fetchRate: query => dispatch(doFetchRateForCurrency(query)),
  onInputChanges: value => dispatch(doInputChange(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExchangeContainer);
