import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GalleryImage} from './GalleryImage/GalleryImage';
import {ImagePage} from './ImagePage/ImagePage';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="GalleryImage" component={GalleryImage} />
      <Stack.Screen name="ImagePage" component={ImagePage} />
    </Stack.Navigator>
  );
}

export default MyStack;
