import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import { exchangeTitle } from '../constants/CommonConstants';

describe('Header Component', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
      <Header title={exchangeTitle} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
