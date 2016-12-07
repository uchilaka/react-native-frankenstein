import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

const styles = require('./styles');

export default class FlexboxScene extends Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: 50, height: 150, backgroundColor: 'powderblue' }} />
                <View style={{ width: 50, height: 150, backgroundColor: 'skyblue' }} />
                <View style={{ width: 50, height: 150, backgroundColor: 'steelblue' }} />
            </View>
        );
    }

}