import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TagList from '../';

describe('Component TagList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TagList tagList={['a', 'b', 'c']} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with empty tagList', () => {
    const tree = renderer.create(<TagList tagList={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
