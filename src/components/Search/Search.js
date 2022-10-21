import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
const Search = ({triggerSearch}) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        onChangeText={text => {
          setSearchValue(text);
        }}
        value={searchValue}
      />
      <TouchableOpacity style={styles.searchButton}>
        <Button
          onPress={() => {
            triggerSearch(searchValue);
          }}
          style={styles.searchButton}
          color="black"
          title="Go"></Button>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    width: '90%',
    maxWidth: 1024,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
    marginTop: 80,
    zIndex: 1,
    top: 0,
  },
  searchInput: {
    width: '75%',
    padding: 10,
    // border: ' 4px solid black',
    borderWidth: 2,
    borderRight: 'none',
    outline: 'none',
    fontSize: 20,
    background: 'none',
    backgroundColor: '#93d50b',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  searchButton: {
    width: '15%',
    borderWidth: 2,
    borderLeftWidth: 0,
    background: 'none',
    fontSize: 20,
    backgroundColor: '#93d50b',
    color: 'red',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
});
