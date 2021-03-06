import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '~store/store';
import App from '~components/App/AppContainer';

const $app = <Provider store={store}>
	<App />
</Provider>;

render($app, document.getElementById('root'));

if (module.hot) {
	module.hot.accept();
}
