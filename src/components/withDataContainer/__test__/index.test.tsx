import * as React from 'react';
import withDataContainer from '../';
import * as renderer from 'react-test-renderer';

describe('withDataContainer Hoc', () => {
  it('is function', () => {
    expect(withDataContainer).toEqual(expect.any(Function));
  });

  it('returns a function', () => {
    expect(withDataContainer(() => 1, {})).toEqual(expect.any(Function));
  });

  describe('run Hoc', () => {
    const Text = ({ text }) => {
      return <p>{text}</p>;
    };
    it('renders correctly', () => {
      const dataLoader = (props, onData) => {
        onData(null, { text: 'ok' });
      };
      const DataContainer = withDataContainer(dataLoader)(Text);
      const tree = renderer.create(<DataContainer />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders Error Component', () => {
      const Error = err => {
        return <h1>{err.message}</h1>;
      };
      const dataLoader = (props, onData) => {
        onData({ message: 'have problems' });
      };
      const DataContainer = withDataContainer(dataLoader, { errorHandler: err => <Error {...err} /> })(Text);
      const tree = renderer.create(<DataContainer />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
