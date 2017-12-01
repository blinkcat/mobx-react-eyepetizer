import * as React from 'react';
import shallowEqual from 'fbjs/lib/shallowEqual';
import hoistNonReactStatic from 'hoist-non-react-statics';
import pick from 'lodash.pick';
import set from 'lodash.set';

export interface Options {
  errorHandler?: (err: { message?: string }) => JSX.Element;
  loadingHandler?: () => JSX.Element;
  pure?: boolean;
  env?: object;
  propsToWatch?: string[];
  shouldUpdate?: (prevProps, nextProps) => boolean;
  shouldSubscribe?: (prevProps, nextProps) => boolean;
}

export function withDataContainer(dataLoader, options?: Options) {
  return WrappedComponent => {
    const {
      errorHandler = err => {
        throw err;
      },
      loadingHandler = () => null,
      pure = false,
      env = {},
      propsToWatch = null,
      shouldUpdate = null,
      shouldSubscribe = null
    } =
      options || {};

    class WithDataContainer extends React.Component<any, { error: object; data: object }> {
      public target: HTMLElement;
      private _privateProps;
      private _privateCachedWatchingProps;
      private _privateUnMounted = false;

      constructor(props) {
        super(props);
        this.state = { error: null, data: null };
      }

      public componentWillReceiveProps(props) {
        this._privateSubscribe(props);
      }

      public shouldComponentUpdate(nextProps, nextState) {
        if (typeof shouldUpdate === 'function') {
          return shouldUpdate(this.props, nextProps);
        }
        if (!pure) {
          return true;
        }
        return (
          !shallowEqual(this.props, nextProps) ||
          !shallowEqual(this.state.data, nextState.data) ||
          this.state.error !== nextState.error
        );
      }

      public componentDidMount() {
        this._privateSubscribe(this.props);
      }

      public componentWillUnmount() {
        this._privateUnMounted = true;
      }

      public render() {
        const { data, error } = this.state;
        if (error) {
          return errorHandler(error);
        }
        if (!data) {
          return loadingHandler();
        }
        const finalProps = {
          ...this.props,
          ...data
        };
        const setRef = c => {
          this.target = c;
        };
        return <WrappedComponent targetRef={setRef} {...finalProps} />;
      }

      // 在这里调用dataLoader
      private _privateSubscribe(props) {
        if (this._privateShouldSubscribe(props)) {
          // update
          const onData = (error: object | null, data) => {
            if (!this._privateUnMounted) {
              this.setState({ error, data });
            }
          };
          dataLoader(props, onData, env);
        }
      }

      // 判断是否需要subscribe
      private _privateShouldSubscribe(props): boolean {
        const firstRun = !this._privateCachedWatchingProps;
        const nextProps = pick(props, propsToWatch);
        const currentProps = this._privateCachedWatchingProps || {};
        this._privateCachedWatchingProps = nextProps;
        // 第一次要重新取数据
        if (firstRun) {
          return true;
        }
        if (typeof shouldSubscribe === 'function') {
          return shouldSubscribe(currentProps, nextProps);
        }
        if (propsToWatch === null) {
          return true;
        }
        // 不对任何变动做出反应
        if (propsToWatch.length === 0) {
          return false;
        }
        // 浅比较
        return !shallowEqual(currentProps, nextProps);
      }
    }
    set(
      WithDataContainer,
      'displayName',
      `WithDataContainer(${WrappedComponent.displayName ||
        WrappedComponent.name ||
        'WrappedComponent'})`
    );
    hoistNonReactStatic(WithDataContainer, WrappedComponent);
    return WithDataContainer;
  };
}
