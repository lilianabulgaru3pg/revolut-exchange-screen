import React from 'react';
import renderer from 'react-test-renderer';
import CurrentBalance from './CurrentBalance';

describe('CurrentBalance Component', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
      <CurrentBalance balance=" 11.00 £" err={false} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
