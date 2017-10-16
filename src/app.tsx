import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'Containers/Home';
import Detail from 'Containers/Detail';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import mobx from 'mobx';
import * as stores from 'Stores/index';
import 'Less/index.less';

mobx.useStrict(true);

const render = () => {
  ReactDOM.render(
    <div style={{ height: '100%' }}>
      <Provider {...stores}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:id" component={Detail} />
          </Switch>
        </HashRouter>
      </Provider>
    </div>,
    document.getElementById('app')
  );
};

render();
