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
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <View style={styles.app}>
      <RouteHandler />
      <Toast position="bottom" />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#242424',
  },
});

export default App;
