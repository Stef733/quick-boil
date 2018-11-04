import * as React from 'react';
import { connect } from 'react-redux';
import App from './App';
import { setHydrate } from './actions';

const mapStateToProps = ({ hydrated }) => ({ hydrated });

const mapDispatchToProps = dispatch => ({
	setHydrate: isHydrated => {
		const action = setHydrate(isHydrated);
		dispatch(action);
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
