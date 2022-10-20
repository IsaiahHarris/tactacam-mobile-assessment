import React from 'react';
import {Link} from 'react-router-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

const PhotoDetail = ({photo, clickBack}) => {
  const urls = photo && photo.urls;
  return (
    <>
      <View style={styles.photoDetailContainer}>
        <View style={styles.header}>
          <Link to="/" style={styles.backButton} onPress={clickBack}>
            <Text style={styles.backButtonText}>Back Home</Text>
          </Link>
          <Link to="/" style={styles.backButton}>
            <TouchableOpacity
              onPress={() => {
                CameraRoll.save(urls.full || urls.thumb).then(data => {
                  if (data) {
                  }
                });
              }}>
              <Text style={styles.backButtonText}>Save Image</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <View style={styles.photoContainer}>
          <Image
            source={{
              uri: urls.full || urls.thumb,
            }}
            style={styles.detailPhoto}
          />
          <View style={styles.descriptionContainer}>
            <Text style={styles.subtitle}>
              {photo.description || 'no description available'}
            </Text>
            <View style={styles.line}></View>
            <Text style={styles.subtitle}>Likes: {photo.likes}</Text>
            <Text style={styles.subtitle}>Name: {photo.user.name}</Text>
            <Text style={styles.subtitle}>Username: {photo.user.username}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  photoDetailContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    width: '100%',
    height: '100%',
  },
  header: {
    width: '90%',
    marginTop: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    backgroundColor: '#93d50b',
    textDecoration: 'none',
    color: 'black',
    padding: 5,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    width: 100,
    textAlign: 'center',
  },
  backButtonText: {
    textAlign: 'center',
  },
  photoContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '90%',
    marginTop: 30,
  },
  descriptionContainer: {
    display: 'flex',
    width: '90%',
    marginTop: 20,
    fontSize: 20,
    flexDirection: 'column',
  },
  detailPhoto: {
    width: '100%',
    height: 300,
    marginTop: 15,
    maxWidth: 700,
  },
  line: {
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 12,
    width: '80%',
  },
  subtitle: {marginTop: 6, color: 'white', fontSize: 16},
});

export default PhotoDetail;
