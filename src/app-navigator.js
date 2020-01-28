import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import Loading from './sections/components/loading';

const Main = createStackNavigator(
  {
    Home: {
      screen: Loading,
    },
  },
  {},
);

const MainContainer = createAppContainer(Main);

export default MainContainer;
