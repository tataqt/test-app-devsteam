import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const ImagePage = props => {
  const {imageId} = props.route.params;

  return (
    <View>
      <Text>Image</Text>
      <Text>{imageId}</Text>
      {/* <Image style={styles.image} source={{uri: imageId}} /> */}
    </View>
  );
};

// const styles = StyleSheet.create({

// });
