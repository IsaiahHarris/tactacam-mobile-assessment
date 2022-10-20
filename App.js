/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import RouteHandler from './RouteHandler.js';

const App = () => {
  return (
    <View style={styles.app}>
      <RouteHandler />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#242424',
  },
});

export default App;
