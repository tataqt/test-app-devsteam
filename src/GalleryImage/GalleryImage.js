import React, {useEffect, useState} from 'react';

import {Text, View, Image, StyleSheet, ActivityIndicator} from 'react-native';

export const GalleryImage = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        data.map(item => (
          <View key={item.id} style={styles.boxImage}>
            <Text>@{item.user?.username}</Text>
            <Image style={styles.image} source={{uri: item.urls?.thumb}} />
            <Text>{item.alt_description}</Text>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  boxImage: {
    borderColor: '#333',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
