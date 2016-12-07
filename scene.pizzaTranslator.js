import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

const styles = require('./styles');

export default class PizzaTranslator extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    _onChangeText = (text) => {
        this.setState({ text });
    };

    render() {
        return (
            <View style={{ padding: 10, paddingTop: 65 }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Type here to translate!"
                    onChangeText={this._onChangeText}
                    />
                <Text style={{ padding: 10, fontSize: 42 }}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}
