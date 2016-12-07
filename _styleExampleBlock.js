import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const styles = require('./styles');

export default class StyleExampleBlock extends Component {
  render() {
    let optionForStyles = [styles.red, styles.bigblue, [styles.bigblue, styles.red], [styles.red, styles.bigblue]];
    let randomizeStyle = () => {
      var styleRandIndex = Math.min(Math.round(Math.random() * optionForStyles.length), optionForStyles.length - 1);
      return optionForStyles[styleRandIndex];
    };

    return (
      <View>
        <Text style={randomizeStyle()}>Something random</Text>
        <Text style={randomizeStyle()}>Did it randomize?</Text>
        <Text style={randomizeStyle()}>Give it up! For the randomest!!</Text>
      </View>
    );
  }
}
