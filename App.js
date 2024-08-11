import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigator/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#191c26" barStyle="light-content" />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
