import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import Category from './screens/containers/category';
import About from './screens/containers/about';
import Profile from './screens/containers/profile';
import Lucky from './screens/containers/lucky';
import Icon from './sections/components/icon';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';

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
  {
    defaultNavigationOptions: {
      //header: () => <Header />,
    },
  },
);

const TabBarComponent = props => <BottomTabBar {...props} />;

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: 'Inicio',
        tabBarIcon: <Icon icon="🏠" />,
      },
    },
    About: {
      screen: About,
    },
    Lucky: {
      screen: Lucky,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#65a721',
    },
  },
);

const MainContainer = createAppContainer(TabNavigator);

export default MainContainer;
