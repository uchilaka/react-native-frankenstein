import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Navigator,
    TouchableHighlight
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

const styles = require('./styles');

export class FlexDimensionBasics extends Component {
    render() {
        return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'powderblue', paddingTop: 65 }}>
                    <Text style={{ padding: 10 }}>
                        This, and the following couple of boxes illustrate the use of flex dimensions
          </Text>
                </View>
                <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
                <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
            </View>
        );
    }
}

export default class FlexingScene extends Component {
    /*
    static propTypes = {
        title: PropTypes.string.isRequired,
        //navigator: PropTypes.object.isRequired
    }
    */

    static get defaultProps() {
        return {
            title: 'Flex Dimensions Basics',
            path: '/app/flex/basics',
            index: 1
        };
    }

    constructor(props, context) {
        super(props, context);
        this._onBack = this._onBack.bind(this);
    }

    _onBack() {
        if (this.props.index > 0)
            this.props.navigator.pop();
    }

    render() {
        return (
            <FlexDimensionBasics />
        );
    }
}
