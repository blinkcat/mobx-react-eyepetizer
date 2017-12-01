import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { VideoRelatedList } from '../';
import { data } from './mock';

describe('VideoRelatedList Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<VideoRelatedList {...data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
