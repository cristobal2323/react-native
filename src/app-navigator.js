import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';

const Main = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Movie: {
      screen: Movie,
    },
  },
  {},
);

const MainContainer = createAppContainer(Main);

export default MainContainer;
