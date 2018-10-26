import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Open up App.js to start working on your app!!!</Text>
        <Header title = "Pessoas2" />
      </View>
    );
  }
}
