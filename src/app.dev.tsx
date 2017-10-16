import React from 'react';
import ReactDOM from 'react-dom';
import mobx from 'mobx';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { AppContainer } from 'react-hot-loader';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Detail from 'Containers/Detail';
import Home from 'Containers/Home';
import * as stores from 'Stores/index';
import 'Less/index.less';

mobx.useStrict(true);

const render = () => {
  ReactDOM.render(
    <div style={{ height: '100%' }}>
      <AppContainer>
        <Provider {...stores}>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/detail/:id" component={Detail} />
            </Switch>
          </HashRouter>
        </Provider>
      </AppContainer>
      <DevTools position={{ top: 20, left: 20 }} />
    </div>,
    document.getElementById('app')
  );
};

render();

if (module.hot) {
  module.hot.accept(['Containers/Home', 'Containers/Detail'], () => {
    render();
  });
}
