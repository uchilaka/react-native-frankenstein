import React, { Component } from 'react';
import { View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

const styles = require('./styles');

export default class JustifyContentBasics extends Component {
    render() {
        return (
            // Try setting `justifyContent` to `center`.
            // Try setting `flexDirection` to `row`.
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View style={{ width: 50, height: 150, backgroundColor: 'powderblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
            </View>
        );
    }
};

