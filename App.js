/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Navbar} from './src/Navbar/Navbar';
import MyStack from './src/MyStack';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Navbar title="Devsteam.mobi" />
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
//TODO Применить Redux, Flexbox
