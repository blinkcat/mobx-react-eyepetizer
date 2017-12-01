import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Loading from '../';

describe('Component Loading', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
