import DevTools from 'mobx-react-devtools';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'Containers/Home';
import Detail from 'Containers/Detail';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import * as mobx from 'mobx';
import * as stores from 'Stores';
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
