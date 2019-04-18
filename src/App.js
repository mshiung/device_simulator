import React from 'react';
import { Root } from 'native-base';
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import SplashScreen from './screens/splashscreen/';
import Home from './screens/home/';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    SplashScreen: { screen: SplashScreen },
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () => (
  <Root>
    <AppContainer />
  </Root>
);
