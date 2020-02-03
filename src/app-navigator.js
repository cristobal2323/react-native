import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import DrawerComponent from './sections/components/drawer';

import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import Category from './screens/containers/category';
import About from './screens/containers/about';
import Profile from './screens/containers/profile';
import Lucky from './screens/containers/lucky';
import Icon from './sections/components/icon';
import Login from './screens/containers/login';
import Loading from './screens/containers/loading';

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

const DrawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: TabNavigator,
      navigationOptions: {
        title: 'Inicio',
        drawerIcon: <Icon icon="🏠" />,
      },
    },
    Sobre: {
      screen: About,
    },
    Suerte: {
      screen: Lucky,
    },
  },
  {
    drawerWidth: 200,
    drawerBackgroundColor: '#f6f6f6',
    contentComponent: DrawerComponent,
    contentOptions: {
      activeBackgroundColor: '#7aba2f',
      activeTintColor: 'white',
      inactiveTintColor: '#828282',
      inactiveBackgroundColor: 'white',
      itemStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,.5)',
      },
      labelStyle: {
        marginHorizontal: 0,
      },
      iconContainerStyle: {
        marginHorizontal: 5,
      },
    },
  },
);

const SwitchNavigator = createSwitchNavigator(
  {
    Loading: Loading,
    App: DrawerNavigator,
    Login: Login,
  },
  {
    initialRouteName: 'Loading',
  },
);

const MainContainer = createAppContainer(SwitchNavigator);

export default MainContainer;
