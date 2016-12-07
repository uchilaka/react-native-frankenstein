import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  PropTypes,
  Navigator,
  TouchableHighlight
} from 'react-native';
import Button from 'react-native-button';
import FixedDimensionBasics from './_fixedDimensionBasics';
import StyleExampleBlock from './_styleExampleBlock';
import Blink from './_blink';
import { Scene, Router, Actions } from 'react-native-router-flux';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Greeting name="Gandahar" />
        <Greeting name="Lex Luthor" />
        <Greeting name="Paul Newman" />
      </View>
    );
  }
}

export class Hello extends Component {
  render() {
    let pic1 = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ScrollView style={styles.scrollview} contentContainerStyle={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Circle Showroom!
        </Text>
        <Blink text="This is using the blink component!" />
        <LotsOfGreetings />
        <Image source={pic1} style={{ width: 193, height: 110 }} />
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <StyleExampleBlock />
        <Text>And now, a lesson about dimensions</Text>
        <FixedDimensionBasics />
        <Button
          onPress={Actions.flex}
          title="Flex Dimension Basics"
          containerStyle={[styles.button, styles.primaryButton]}
          style={[styles.buttonText, styles.primaryButtonText]}
          color="#ff3300"
          >
          Flex Dimension Example
          </Button>
        <Button
          onPress={Actions.flexbox}
          title="Flex Dimension Basics"
          containerStyle={[styles.button, styles.secondaryButton]}
          style={[styles.buttonText, styles.secondaryButtonText]}
          >
          Flexbox Example
          </Button>
        <Button
          onPress={Actions.justifyContent}
          title="Flex Dimension Basics"
          containerStyle={[styles.button, styles.positiveButton]}
          style={[styles.buttonText, styles.invertedButtonText]}
          >
          Justified Content Example
          </Button>
        <Button
          onPress={Actions.justifyContent}
          title="Flex Dimension Basics"
          containerStyle={[styles.button, styles.clearButton]}
          style={[styles.buttonText, styles.clearButtonText]}
          >
          Justified Content Example
          </Button>
        <Button
          onPress={Actions.pizzaTranslator}
          containerStyle={[styles.button, styles.negativeButton]}
          style={[styles.buttonText, styles.invertedButtonText]}
          >
          Text Input Example
          </Button>
      </ScrollView>
    );
  }
}

export default class IndexView extends Component {
  /*
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  }
  */

  static defaultProps() {
    return {
      title: 'Welcome to Circle ShowRoom',
    }
  }

  constructor(props, context) {
    super(props, context);
    //this._onForward = this._onForward.bind(this);
  }

  render() {
    return (
      /*
      <Navigator
        renderScene={(route, navigator) => {
          return <Hello />
        } }
        navigationBar={
          <Navigator.navigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => {
                if (route.index === 0) {
                  return null;
                } else
                  return (
                    <TouchableHighlight onPress={() => navigator.pop()}>
                      <Text>Back</Text>
                    </TouchableHighlight>
                  );
              },
              RightButton: (route, navigator, index, navState) => {
                // not done, for now
                if (route.index === 0) {
                  return (
                    <TouchableHighlight onPress={() => navigator.push(routes[1])}>
                      <Text>Flex</Text>
                    </TouchableHighlight>
                  );
                } else
                  return null;
              },
              Title: (route, navigator, index, navState) =>
              { return (<Text>Awesome Nav Bar</Text>); },
            }} />
        }
        />
        */
      <Hello />
    );
  }

}

const styles = require('./styles');

