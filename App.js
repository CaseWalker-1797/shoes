import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNav from './src/navigations/AppNav';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNav />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
