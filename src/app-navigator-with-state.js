import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppNavigator from './app-navigator';
import {createReduxContainer} from 'react-navigation-redux-helpers';
import {BackHandler} from 'react-native';
import {NavigationActions} from 'react-navigation';

const App = createReduxContainer(AppNavigator);

class AppNavigatorWithState extends createReduxContainer(AppNavigator) {
  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    );
    super.componentWillUnmount && super.componentWillUnmount();
  }

  onBackButtonPressAndroid = () => {
    const {dispatch} = this.props;
    const {state} = this.getCurrentNavigation();
    // ... do something with state
    dispatch(NavigationActions.back());
    return true;
  };
}

const mapStateToProps = state => ({
  state: state.navegation,
});

export default connect(mapStateToProps)(AppNavigatorWithState);
