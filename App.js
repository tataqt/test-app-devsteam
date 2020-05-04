/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {Navbar} from './src/Navbar/Navbar';
import {GalleryImage} from './src/GalleryImage/GalleryImage';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Navbar title="Devsteam.mobi" />
          <GalleryImage />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
//TODO Применить Redux, React Navigation, Flexbox, ref. Сделать страницу фотографии
