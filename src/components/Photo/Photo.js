import React from 'react';
import {Link} from 'react-router-native';

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

const Photo = ({url, id, photo, clickPhoto}) => {
  return (
    <View style={styles.photoContainer}>
      <TouchableOpacity>
        <Link
          onPress={() => {
            clickPhoto(photo);
          }}
          to={`/photo/${id}`}>
          <Image
            style={styles.photo}
            alt="click to view"
            className="photo"
            source={{
              uri: url,
            }}
          />
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  photoContainer: {
    width: '90%',
    margin: 10,
  },
  photo: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
});
