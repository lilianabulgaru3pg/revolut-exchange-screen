import React from 'react';
import renderer from 'react-test-renderer';
import ExchangeCard from './ExchangeCard';
import {
  CURRENCIES,
  inputFromType,
} from '../constants/CommonConstants';

describe('ExchangeCard Component', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
      <ExchangeCard
        balance=" 11.00 £"
        inputVal={240}
        id="select-base-currency"
        currency={CURRENCIES.EUR}
        currencies={CURRENCIES}
        onCurrencyChange={jest.fn()}
        onInputChange={jest.fn()}
        type={inputFromType}
        err
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
