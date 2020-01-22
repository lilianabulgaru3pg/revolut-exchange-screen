import React from 'react';
import renderer from 'react-test-renderer';
import SelectCurrency from './SelectCurrency';
import { CURRENCIES } from '../constants/CommonConstants';

describe('SelectCurrency Component', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
      <SelectCurrency
        id="select-base-currency"
        currency={CURRENCIES.EUR}
        currencies={CURRENCIES}
        onCurrencyChange={jest.fn()}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
