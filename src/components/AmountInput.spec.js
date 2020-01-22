import React from 'react';
import renderer from 'react-test-renderer';
import AmountInput from './AmountInput';

describe('AmountInput Component', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
      <AmountInput
        autoFocus
        inputVal={120}
        onInputChange={jest.fn()}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
