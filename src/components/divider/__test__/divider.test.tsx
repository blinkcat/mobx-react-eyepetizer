import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Divider from '../';

describe('Component Divider', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Divider />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with short prop correctly', () => {
    const tree = renderer.create(<Divider short />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
