import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import './style.scss';

// pages
import HomePage from '../home';

const App = (props) => {
	return (
		<Fragment>
			<Helmet defaultTitle="CLC Development" />
			<Switch>
				<Route component={HomePage} path="/" exact />
			</Switch>
			
		</Fragment>
	);
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(App);
