import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppNavigator from './app-navigator';
import {createReduxContainer} from 'react-navigation-redux-helpers';

const App = createReduxContainer(AppNavigator);

const mapStateToProps = state => ({
  state: state.navegation,
});

export default connect(mapStateToProps)(App);
