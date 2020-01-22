import React from 'react';
import renderer from 'react-test-renderer';
import RateData from './RateData';

describe('RateData Component', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
      <RateData rate="1$ = 11.00 £" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
