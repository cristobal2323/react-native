import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import Category from './screens/containers/category';

const Main = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Movie: {
      screen: Movie,
    },
    Category: {
      screen: Category,
    },
  },
  {},
);

const MainContainer = createAppContainer(Main);

export default MainContainer;
