import { createStore } from 'redux';
import appReducers from './reducers';

// @ts-ignore - the following window property exists only when Redux dev tools extension is installed
const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
	appReducers,
	devTool,
);
