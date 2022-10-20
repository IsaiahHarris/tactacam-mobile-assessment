import React, {useState, useEffect} from 'react';
const CLIENT_ID = 'bPfgiIw4vW72MUt72sWrzfIR4KSMdhe3J0brvyZqoCs';
import Photo from '../Photo/Photo';
import {Picker} from '@react-native-picker/picker';
import SelectDropdown from 'react-native-select-dropdown';

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const colors = ['black', 'white'];

const orientations = ['landscape', 'portrait'];

const Item = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
);
const Home = ({query, clickPhoto}) => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [params, setParams] = useState({});
  const [error, setError] = useState('');
  useEffect(() => {
    console.log('qyering');
    getPhotos(1, true);
  }, [query, params.color, params.orientation]);

  const getPhotos = (page, newSearch) => {
    const colorParam = params.color && query ? `&color=${params.color}` : '';
    const orientationParam =
      params.orientation && query ? `&orientation=${params.orientation}` : '';
    fetch(
      `https://api.unsplash.com/search/photos?page=${page}&per_page=20&query=${query}${colorParam}${orientationParam}&client_id=${CLIENT_ID}`,
    )
      .then(response => {
        console.log(response.status);
        if (response.status === 403) {
          setError(
            'Too many requests, developer mode only allows for 50 requests per hour',
          );
        }
        return response.json();
      })
      .then(data => {
        if (!newSearch) {
          setPhotos([...photos, ...data.results]);
        } else {
          setPhotos([...data.results]);
        }
      });
  };

  const renderItem = ({item}) => {
    return (
      <Photo
        clickPhoto={clickPhoto}
        key={item.id}
        id={item.id}
        photo={item}
        url={item.urls.thumb}
      />
    );
  };
  return (
    <View style={styles.homeContainer}>
      <View style={styles.selectContainer}>
        <SelectDropdown
          buttonStyle={styles.select}
          data={colors}
          onSelect={selectedItem => {
            setParams({...params, color: selectedItem});
          }}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem;
          }}
          rowTextForSelection={item => {
            return item;
          }}
          defaultButtonText="Color"
        />
        <SelectDropdown
          buttonStyle={styles.select}
          data={orientations}
          onSelect={selectedItem => {
            setParams({...params, orientation: selectedItem});
          }}
          buttonTextAfterSelection={selectedItem => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={item => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
          defaultButtonText="Orientation"
        />
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          data={photos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onEndReached={() => {
            console.log('next');
            getPhotos(page + 1, false);
            setPage(page => page + 1);
          }}
          onEndReachedThreshold={0.2}
          contentContainerStyle={styles.scrollComponent}
        />
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  selectContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    maxWidth: 1024,
    fontWeight: 'bold',
    borderRadius: 4,
  },
  select: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundColor: '#93d50b',
    borderWidth: 3,
    borderRadius: 4,
    width: 150,
    marginRight: 6,
  },
  scrollContainer: {
    width: '100%',
  },
  scrollComponent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 6,
    marginLeft: 8,
  },
});
