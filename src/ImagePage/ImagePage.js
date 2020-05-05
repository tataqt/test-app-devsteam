import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

export const ImagePage = props => {
  const {data} = props.route.params;
  const win = Dimensions.get('window');
  const ratio = win.width / data.width;

  return (
    <View>
      <Image
        style={{width: win.width, height: data.height * ratio}}
        source={{uri: data.urls.full}}
      />
    </View>
  );
};

// const styles = StyleSheet.create({

// });
