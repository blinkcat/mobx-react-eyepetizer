import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Layout from '../';

describe('Component Layout', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Layout>test</Layout>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders title correctly', () => {
    const tree = renderer.create(<Layout title="Home">test</Layout>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
