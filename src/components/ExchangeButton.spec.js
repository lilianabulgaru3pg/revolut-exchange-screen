import React from 'react';
import renderer from 'react-test-renderer';
import ExchangeButton from './ExchangeButton';
import { exchangeTitle } from '../constants/CommonConstants';

describe('ExchangeButton Component', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
      <ExchangeButton
        onExchange={jest.fn()}
        disabled={false}
        title={exchangeTitle}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
