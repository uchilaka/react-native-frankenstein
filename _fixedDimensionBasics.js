import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

export default class FixedDimensionBasics extends Component {
  render() {
    return (
      <View>
        <Text style={{ padding: 10 }}>Below, is an example of fixed dimensions</Text>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
        <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}