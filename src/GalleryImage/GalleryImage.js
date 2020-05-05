import React, {useEffect, useState} from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export const GalleryImage = ({navigation}) => {
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
    <SafeAreaView>
      <ScrollView>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          data.map(item => (
            <View key={item.id} style={styles.boxImage}>
              <Text style={styles.userName}>@{item.user?.username}</Text>
              <TouchableOpacity
                // eslint-disable-next-line react-native/no-inline-styles
                style={{width: 200}}
                onPress={() =>
                  navigation.navigate('ImagePage', {
                    imageId: item.id,
                    data: item,
                  })
                }>
                <Image style={styles.image} source={{uri: item.urls?.thumb}} />
              </TouchableOpacity>
              <Text>{item.alt_description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  boxImage: {
    borderColor: '#f5deb3',
    borderWidth: 3,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  userName: {
    color: '#3949ab',
    fontSize: 18,
  },
});
